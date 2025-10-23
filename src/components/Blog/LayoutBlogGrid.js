'use client'

import React, { useState } from "react";
import blogData from "@/data/blog/data.json"
import BlogItem from "@/components/Blog/BlogItem"
import HandlePagination from "../Other/HandlePagination";

const LayoutBlogGrid = ({ layout, type, pageLimit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  let offset = currentPage * pageLimit;

  const pageCount = Math.ceil((blogData.length - 1) / pageLimit);

  // If page number 0, set current page = 0
  if (pageCount === 0) {
    setCurrentPage(0);
  }

  let currentBlogs = blogData.slice(offset + 1, offset + pageLimit + 1);
  if (currentPage > 0) {
    currentBlogs = blogData.slice(offset, offset + pageLimit);
  }

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  return (
    <div className={`section blog sm:py-25 py-15 ${layout}`}>
      <h3 className="blind">Blog</h3>
      <div className="container">
        <div className="blog_list grid xl:grid-cols-3 sm:grid-cols-2 gap-7.5 gap-y-10">
          {currentBlogs.map((item) => (
            <BlogItem key={item.id} data={item} type={type} />
          ))}
        </div>
        {pageCount > 1 && (
          <div className="paginator list-pagination flex items-center gap-2 w-full md:mt-10 mt-7">
            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  )
}

export default LayoutBlogGrid