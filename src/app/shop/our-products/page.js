'use client'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import Paginator from 'react-hooks-paginator';
import Product from '@/components/Product';
import productData from "@/data/products.json"
import { getProductbyFilter } from '@/common/productSelect';
import { shop } from '@/common/variables';
import ShopSidebar from '@/components/Shop/ShopSidebar';

export default function ourProducts() {
    const filterData = useSelector((state) => state.shopReducers.filter)
    const pageLimit = 12
    const [offset, setOffset] = useState(0)
    const [currentSort, setCurrentSort] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [currentData, setCurrentData] = useState([])
    const [checkPrdSale, setCheckPrdSale] = useState(false)

    useEffect(() => {
        let sortedProduct = getProductbyFilter(
            productData,
            currentSort,
            filterData.category,
            filterData.priceRange.from,
            filterData.priceRange.to,
            filterData.brand,
            filterData.rate,
        );
        setCurrentData(sortedProduct);
        if (checkPrdSale) {
            sortedProduct = sortedProduct.filter((product) => product.originPrice - product.price > 0);
            setCurrentData(sortedProduct);
        }
    }, [offset, currentSort, filterData, checkPrdSale]);

    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Products'} nav2Link={'/pages/our-products'} title={'Our Products'} />
            <section className="section shop sm:py-25 py-15">
                <div className="container flex max-xl:flex-col-reverse gap-y-12">
                    <div className="shop_sidebar flex-shrink-0 xl:w-[18.75rem] w-full h-fit">
                        <ShopSidebar />
                    </div>
                    <div className="shop_product w-full xl:pl-15">
                        <div className="shop_product_heading flex flex-wrap items-center justify-between gap-4">
                            <div className="form_checkbox flex items-center gap-1">
                                <input type="checkbox" className="checkbox" id="filterSale" onChange={() => setCheckPrdSale(!checkPrdSale)} />
                                <Icon.CheckCircle className="text-[22px] text-[#36A785] checkbox_icon" />
                                <label className="label pl-7 cursor-pointer" htmlFor="filterSale">Shop sale items only</label>
                            </div>
                            <div className="sorting flex items-center gap-3">
                                <span className="caption1 text-variant1">Sort by:</span>
                                <div className="form_select">
                                    <select
                                        name="sorting"
                                        className="w-full py-2.5 pl-3 pr-18 border border-outline rounded caption1"
                                        required
                                        onChange={(e) => setCurrentSort(e.target.value)}
                                    >
                                        {shop.SORT_TYPES.map((item, index) => (
                                            <option key={index} value={item.value}>{item.name}</option>
                                        ))}
                                    </select>
                                    <Icon.CaretDown className="arrow_down text-xl text-variant1" />
                                </div>
                            </div>
                        </div>
                        <div className="product_list grid lg:grid-cols-3 grid-cols-2 sm:gap-7.5 gap-5 gap-y-10 mt-7.5">
                            {currentData.length < 1 ? (
                                <p className='txt-button pt-3'>No product found!</p>
                            ) :
                                <>
                                    {currentData.slice(offset, offset + pageLimit).map((item, index) => (
                                        <Product data={item} key={index} />
                                    ))}
                                </>
                            }
                        </div>
                        <div className="list-pagination">
                            <Paginator
                                pageContainerClass="paginator w-full flex items-center justify-center gap-2 lg:mt-10 mt-7"
                                totalRecords={currentData.length}
                                pageLimit={pageLimit}
                                pageNeighbours={2}
                                setOffset={setOffset}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}