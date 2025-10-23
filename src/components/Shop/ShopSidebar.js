'use client'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import productData from "@/data/products.json"
import { shop } from "../../common/variables";
import { formatCurrency } from "../../common/utils";
import {
  setFilterCategory,
  setFilterBrand,
  setFilterRate,
  setFilterPriceRange,
  resetFilter,
} from "../../redux/actions/shopActions";
import Rate from "../Other/Rate";

export default function ShopSidebar() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.shopReducers.filter);

  useEffect(() => {
    dispatch(resetFilter());
  }, []);
  return (
    <>
      <div className="filter_category">
        <h6 className="heading6">Product Categories</h6>
        <ul className="category_list flex flex-col gap-3 mt-4" role="tablist">
          {shop.CATEGORISE.map((item, index) => (
            <li
              key={index}
              role="presentation"
            >
              <button
                key={index}
                className={`tab_btn flex items-center justify-between w-full text-variant1 duration-300 hover:text-black ${classNames({ active: item === filterData.category })}`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setFilterCategory(item));
                }}
              >
                <span className="txt">{item}</span>
                <span className="quantity">({productData.filter(prd => prd.category === item).length})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter_brand md:mt-10 mt-7">
        <h5 className="heading5">Popular brand</h5>
        <ul className="brand_list flex flex-col gap-3 mt-4" role="tablist">
          {shop.BRANDS.map((item, index) => (
            <li key={index} className="brand_item form_checkbox flex">
              <div>
                <input name="brand-filter"
                  type="checkbox"
                  id={"brand-" + item}
                  value={item}
                  checked={filterData.brand === item}
                  onChange={() => {
                    if (filterData.brand === item) {
                      dispatch(setFilterBrand(""));
                    } else {
                      dispatch(setFilterBrand(item));
                    }
                  }}
                  className="checkbox"
                />
                <Icon.CheckSquare weight="fill" className="text-[22px] text-orange checkbox_icon" />
              </div>
              <label className="label flex items-center justify-between w-full pl-7 cursor-pointer" htmlFor={"brand-" + item}>
                <span className="txt">{item}</span>
                <span className="quantity">({productData.filter(prd => prd.brand === item).length})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter_rating md:mt-10 mt-7">
        <h5 className="heading5">Customer Rating</h5>
        <ul className="rating_list flex flex-col gap-3 mt-4" role="tablist">
          {shop.RATE.map((item, index) => (
            <li key={index} className="rating_item form_radio flex items-center gap-2">
              <input name="rating-filter"
                type="checkbox"
                id={"rate" + item}
                value={"rating-" + item}
                checked={filterData.rate === item}
                onChange={() => {
                  if (filterData.rate === item) {
                    dispatch(setFilterRate(""));
                  } else {
                    dispatch(setFilterRate(item));
                  }
                }}
                className="radio_input flex-shrink-0 relative w-4 h-4 border-orange rounded-full cursor-pointer"
              />
              <label className="flex items-center justify-between w-full cursor-pointer" htmlFor={"rate" + item}>
                <span className="flex items-center gap-2">
                  <Rate currentRate={item} color={'text-yellow'} />
                  <span className="star text-variant1">{item}</span>
                </span>
                <span className="quantity text-variant1">({productData.filter(prd => prd.rate === item).length})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter_price md:mt-10 mt-7">
        <h5 className="heading5">Price Range</h5>
        <ul className="price_list flex flex-col gap-3 mt-4" role="tablist">
          {shop.PRICE_POINTS.map((item, index) => {
            let nextVal = shop.PRICE_POINTS[index + 1];
            if (index === shop.PRICE_POINTS.length - 1) {
              return;
            }
            return (
              <li key={index} className="price_item form_checkbox flex">
                <div>
                  <input name="price-filter"
                    type="checkbox"
                    id={`f${item}t${nextVal}`}
                    value={`f${item}t${nextVal}`}
                    checked={filterData.priceRange.to === nextVal}
                    onChange={() => {
                      if (filterData.priceRange.to === nextVal) {
                        dispatch(setFilterPriceRange({}));
                      } else {
                        dispatch(
                          setFilterPriceRange({ from: item, to: nextVal })
                        );
                      }
                    }}
                    className="checkbox"
                  />
                  <Icon.CheckSquare weight="fill" className="text-[22px] text-orange checkbox_icon" />
                </div>
                <label className="label flex items-center justify-between w-full pl-7 cursor-pointer" htmlFor={`f${item}t${nextVal}`}>
                  <span className="txt">{formatCurrency(item)} - {formatCurrency(nextVal)}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
