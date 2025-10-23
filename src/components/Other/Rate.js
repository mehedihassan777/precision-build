import PropTypes from "prop-types";
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function Rate({ currentRate, style, color }) {
  let arrOfStar = [];
  for (let i = 0; i < 5; i++) {
    if (i >= currentRate) {
      arrOfStar.push(<li><Icon.Star key={i} weight="fill" className={`${style} text-variant2`} /></li>);
    } else {
      arrOfStar.push(<li><Icon.Star key={i} weight="fill" className={`${style} ${color ? color : ''}`} /></li>);
    }
  }
  return <ul className="rate flex">{arrOfStar}</ul>;
}

Rate.propTypes = {
  currentRate: PropTypes.number,
};
