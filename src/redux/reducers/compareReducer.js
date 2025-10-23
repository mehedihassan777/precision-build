import { v4 as uuidv4 } from "uuid";

import { COMPARE } from "../variables";

const initialState = [];

export default function compareReducer(state = initialState, action) {
  const compareItem = state.find((item) => item.id === action.productId);
  const compareItemIndex = compareItem && state.indexOf(compareItem);
  switch (action.type) {
    case COMPARE.ADD_TO_COMPARE:
      const addedCompareItem = state.find(
        (item) => item.id === action.product.id
      );
      const addedCompareItemIndex =
        addedCompareItem && state.indexOf(addedCompareItem);
      if (!addedCompareItem) {
        return [
          ...state,
          {
            ...action.product,
          },
        ];
      } else {
        return [
          ...state.slice(0, addedCompareItemIndex),
          ...state.slice(addedCompareItemIndex + 1),
        ];
      }
    case COMPARE.REMOVE_FROM_COMPARE:
      return [
        ...state.slice(0, compareItemIndex),
        ...state.slice(compareItemIndex + 1),
      ];
    default:
      return state;
  }
}
