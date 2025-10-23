'use client'

import React, { useEffect, useState } from "react";
import blogData from "@/data/blog/data.json"
import BlogItem from "@/components/Blog/BlogItem"
import BlogSidebar from "./BlogSidebar";
import { useSearchParams } from "next/navigation";
import { getPostByKeyword, getPostByTag, getPosts } from "@/common/postSelect";
import Paginator from "react-hooks-paginator";

const LayoutBlogDefault = ({ layout, type, pageLimit }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (!search || search.length === 0) {
      if (!category || category.length === 0) {
        if (!tag || tag.length === 0) {
          setCurrentData(blogData);
        } else {
          setCurrentData(getPostByTag(blogData, tag));
        }
      } else {
        setCurrentData(getPosts(blogData, category));
      }
    } else {
      setCurrentData(getPostByKeyword(blogData, search));
    }
  }, [offset, search, category, tag]);

  if (search) {
    currentData = getPostByKeyword(currentData, search)
  }

  if (category) {
    currentData = getPosts(currentData, category, offset + pageLimit)
  }

  if (tag) {
    currentData = getPostByTag(currentData, tag)
  }

  if (currentData && !Array.isArray(currentData)) {
    currentData = [currentData];
  } else if (currentData === undefined) {
    currentData = [];
  }

  return (
    <div className={`section blog sm:py-25 py-15 ${layout}`}>
      <div className="container flex max-lg:flex-col gap-y-12">
        <div className="list w-full xl:pr-25 lg:pr-12">
          <div className="blog_list grid lg:gap-10 gap-8">
            {currentData !== undefined && currentData.length > 0 ? (
              <>
                {currentData.slice(offset, offset + pageLimit).map((item) => (
                  <BlogItem key={item.id} data={item} type={type} />
                ))}
              </>
            ) : (
              <>
                <strong className="heading6">No blog found!</strong>
              </>
            )}
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
        <div className="blog_sidebar flex-shrink-0 xl:w-96 lg:w-80 w-full">
          <BlogSidebar data={blogData} layout={layout} hideElements={'outstanding'} />
        </div>
      </div>
    </div>
  )
}

export default LayoutBlogDefault