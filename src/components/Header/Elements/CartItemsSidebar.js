'use client'

import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import CartItem from "./CartItem";
import ClientOnlyPortal from "@/common/ClientOnlyPortal";
import Button from "@/components/Control/Button";
import { calculateTotalPrice } from "@/common/shopUtils";

function CartItemsSidebar({ showCart, setShowCart }) {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <>
      <ClientOnlyPortal selector="#cart-sidebar">
        <CSSTransition
          in={showCart}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="cart__wrapper lg:p-10 p-7">
            <h6 className="heading6 pb-4">Shopping cart</h6>
            {cartState.length === 0 ? (
              <h3 className="empty-noti">No product in cart</h3>
            ) : (
              <>
                {cartState.length !== 0 &&
                  cartState.map((item) => (
                    <CartItem
                      key={item.cartId}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      quantity={item.cartQuantity}
                      cartId={item.cartId}
                      slug={item.slug}
                    />
                  ))}
                <div className="cart-items__total mt-auto pt-4 border-t border-outline">
                  <div className="cart-items__total__price flex items-end justify-between">
                    <h5>Total</h5>
                    <span className="heading6">{calculateTotalPrice(cartState, true)}</span>
                  </div>
                  <div className="cart-items__total__buttons">
                    <Button
                      width="100%"
                      action={process.env.PUBLIC_URL + "/shop/cart"}
                      content="View cart"
                      className="mt-4"
                    />
                    <Button
                      width="100%"
                      action={process.env.PUBLIC_URL + "/shop/checkout"}
                      content="Checkout"
                      className="mt-4"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showCart && (
        <ClientOnlyPortal selector="#overlay">
          <div className="overlay" onClick={() => setShowCart(false)}></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

export default CartItemsSidebar;
