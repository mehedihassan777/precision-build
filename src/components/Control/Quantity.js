'use client'

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import { product } from "../../common/variables";

export default function Quantity({
  className,
  defaultQuantity,
  getQuantity,
  onDecrease,
  onIncrease,
  maxValue,
}) {
  const [quantity, setQuantity] = useState(
    defaultQuantity || product.DEFAULT_QUANTITY
  );
  useEffect(() => {
    getQuantity && getQuantity(quantity);
  }, [quantity]);
  return (
    <div className={`quantity-controller flex items-center w-fit p-3 border border-outline ${classNames(className)}`}>
      <button
        className={`quantity-controller__btn -descrease ${quantity < 2 ? 'pointer-events-none text-variant2' : ''}`}
        onClick={() => {
          if (quantity < 2) {
            return;
          }
          setQuantity(quantity - 1);
          onDecrease && onDecrease();
        }}
      >
        <Icon.Minus weight="bold" />
      </button>
      <h5 className="quantity-controller__number txt-button">{quantity}</h5>
      <button
        className="quantity-controller__btn -increase"
        onClick={() => {
          if (quantity >= maxValue) {
            return;
          }
          setQuantity(quantity + 1);
          onIncrease && onIncrease();
        }}
      >
        <Icon.Plus weight="bold" />
      </button>
    </div>
  );
}
