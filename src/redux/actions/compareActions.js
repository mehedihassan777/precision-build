import { COMPARE } from "../variables";

export const addToCompare = (product) => ({
  type: COMPARE.ADD_TO_COMPARE,
  product,
});

export const removeFromCompare = (productId) => ({
  type: COMPARE.REMOVE_FROM_COMPARE,
  productId,
});
