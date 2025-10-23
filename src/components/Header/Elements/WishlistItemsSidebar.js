'use client'

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { removeFromWishlist } from "@/redux/actions/wishlistActions";
import { convertToSlug, formatCurrency } from "@/common/utils";
import { toast } from "react-toastify";
import ClientOnlyPortal from "@/common/ClientOnlyPortal";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

function WishlistItemsSidebar({ showWishlist, setShowWishlist }) {
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const removeProductHandle = (wishlistId) => {
    dispatch(removeFromWishlist(wishlistId));
    toast.error("Product removed from wishlist");
  };

  return (
    <>
      <ClientOnlyPortal selector="#wishlist-sidebar">
        <CSSTransition
          in={showWishlist}
          unmountOnExit
          timeout={200}
          classNames="wishlist-sidebar"
        >
          <div className="wishlist__wrapper lg:p-10 p-7">
            <h6 className="heading6 pb-4">Wishlist</h6>
            {wishlistState.length === 0 ? (
              <h3 className="empty-noti">No product in wishlist</h3>
            ) : (
              <>
                {wishlistState.length !== 0 &&
                  wishlistState.map((item) => (
                    <div className="wishlist-item flex items-center gap-4 mt-5 pb-5 border-b border-outline w-full">
                      <div className="bg-img flex-shrink-0 overflow-hidden md:w-[100px] md:h-[100px] w-24 h-24">
                        <img src={process.env.PUBLIC_URL + item.image} className="w-full h-full object-cover" alt={item.name} />
                      </div>
                      <div className="wishlist-item__info w-full">
                        <Link
                          href={process.env.PUBLIC_URL + "/shop/product-details/[slug]"}
                          as={process.env.PUBLIC_URL + "/shop/product-details/" + convertToSlug(item.name.toLowerCase())}
                          className="txt-button line-clamp-2 pr-5"
                        >
                          {item.name}
                        </Link>
                        <h5 className="txt-button mt-2">{formatCurrency(item.price)}</h5>
                      </div>
                      <button 
                        className="btn_remove_product rounded-full bg-transparent text-xl max-md:text-base text-red duration-300 hover:bg-red hover:text-white"
                        onClick={() => removeProductHandle(item.id)}
                      >
                        <Icon.XCircle className="text-xl" />
                        <span className="blind">button remove product</span>
                      </button>
                    </div>
                  ))
                }
              </>
            )}
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showWishlist && (
        <ClientOnlyPortal selector="#overlay">
          <div className="overlay" onClick={() => setShowWishlist(false)}></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

export default WishlistItemsSidebar;
