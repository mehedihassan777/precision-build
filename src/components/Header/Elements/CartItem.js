import { useDispatch } from "react-redux";

import { convertToSlug, formatCurrency } from "../../../common/utils";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { toast } from "react-toastify";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

function CartItem(props) {
  const dispatch = useDispatch();
  const { image, name, price, quantity, cartId, slug } = props;
  const removeProductHandle = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(cartId));
    toast.error("Product removed from cart");
  };
  return (
    <div className="cart-item flex items-center gap-4 mt-5 pb-5 border-b border-outline w-full">
      <div className="bg-img flex-shrink-0 overflow-hidden md:w-[100px] md:h-[100px] w-24 h-24">
        <img src={process.env.PUBLIC_URL + image} className="w-full h-full object-cover" alt={name} />
      </div>
      <div className="cart-item__info w-full">
        <Link
          href={process.env.PUBLIC_URL + "/shop/product-details/[slug]"}
          as={process.env.PUBLIC_URL + "/shop/product-details/" + convertToSlug(name.toLowerCase())}
          className="txt-button line-clamp-2 pr-5"
        >
          {name}
        </Link>
        <h5 className="txt-button mt-2">{formatCurrency(price)}</h5>
        <p className="mt-2">Quantity: <span>{quantity}</span></p>
      </div>
      <button className="btn_remove_product rounded-full bg-transparent text-xl max-md:text-base text-red duration-300 hover:bg-red hover:text-white" onClick={removeProductHandle}>
        <Icon.XCircle className="text-xl" />
        <span className="blind">button remove product</span>
      </button>
    </div>
  );
}

export default CartItem;
