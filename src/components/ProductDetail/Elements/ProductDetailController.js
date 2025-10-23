'use client'

import { useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import classNames from "classnames";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import Quantity from "../../Control/Quantity";
import AddToCart from "../../Control/AddToCart";
import Button from "../../Control/Button";
import {
  getAvaiableQuantityInCart,
  checkProductInWishList,
} from "../../../common/shopUtils";


export default function ProductDetailController({
  data,
  getQuantity,
  onAddToCart,
  onAddToWishList,
}) {
  const [quantity, setQuantity] = useState();
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);

  const avaiableProduct = getAvaiableQuantityInCart(
    cartState,
    data.id,
    data.quantity
  );
  return (
    <div className="product-detail__controler flex max-sm:flex-col sm:items-center justify-between w-full gap-3 mt-3">
      <Quantity
        className="gap-13"
        getQuantity={(q) => {
          setQuantity(q), getQuantity(q);
        }}
        maxValue={avaiableProduct}
      />
      <div className="flex items-center justify-between gap-2 w-full">
        <AddToCart
          className={`${classNames({
            "-disable": quantity > avaiableProduct || data.quantity < 1,
          })}`}
          onClick={onAddToCart}
        />
        <div className="product-detail__controler__actions">
          <div data-tip data-for="add-wishlist">
            <button
              className={`btn_wishlist flex flex-shrink-0 items-center justify-center w-12 h-12 border border-outline duration-300 hover:border-outline hover:bg-black hover:text-white ${classNames({ active: checkProductInWishList(wishlistState, data.id) })}`}
              onClick={onAddToWishList}
            >
              {checkProductInWishList(wishlistState, data.id) ? <Icon.Heart weight="fill" className="text-2xl text-red" /> : <Icon.Heart className="text-2xl" />}
              <span className="blind">button wishlist</span>
            </button>
          </div>
          <ReactTooltip id="add-wishlist" type="dark" effect="solid">
            <span>Add to wishlist</span>
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}
