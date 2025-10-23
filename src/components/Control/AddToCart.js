import classNames from "classnames";

export default function AddToCart({ onClick, className }) {
  return (
    <button className={`btn_cart btn flex items-center justify-center w-full h-12 bg-black ${classNames(className)}`} onClick={onClick}>
      Add to cart
    </button>
  );
}
