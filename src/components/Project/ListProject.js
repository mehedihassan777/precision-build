'use client'

import React, { useEffect, useState } from "react";
import projectData from "@/data/project/data.json"
import ProjectItem from "@/components/Project/ProjectItem"
import { getPosts } from "@/common/postSelect";
import Paginator from "react-hooks-paginator";

const ListProject = ({ layout, type, pageLimit }) => {
  const [offset, setOffset] = useState(0);
  const [categorySelected, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  let [currentData, setCurrentData] = useState([]);
  const uniqueCategories = Array.from(new Set(projectData.map(item => item.category).slice(0, 4)));

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    setCurrentData(getPosts(projectData, categorySelected));
  }, [offset, categorySelected]);

  if (categorySelected) {
    currentData = getPosts(currentData, categorySelected, offset + pageLimit)
  }

  if (currentData && !Array.isArray(currentData)) {
    currentData = [currentData];
  } else if (currentData === undefined) {
    currentData = [];
  }

  return (
    <div className={`section projects sm:py-25 py-15`}>
      <h3 className="blind">Projects</h3>
      <div className="container flex flex-col items-center gap-12">
        <div className="menu_tab w-full">
          <ul className="menu flex items-center justify-center gap-10" role="tablist">
            <li className="tab_item" role="presentation">
              <button
                className={`tab_btn has_line heading6 capitalize hover:text-orange duration-300 ${categorySelected === "all" ? 'active' : ''}`}
                role="tab"
                aria-selected={categorySelected === "all" ? "true" : "false"}
                onClick={() => handleCategoryClick("all")}
              >
                all
              </button>
            </li>
            {uniqueCategories.map((item, index) => (
              <li className="tab_item" role="presentation" key={index}>
                <button
                  className={`tab_btn has_line heading6 capitalize hover:text-orange duration-300 ${categorySelected === item ? 'active' : ''}`}
                  role="tab"
                  aria-selected={item === categorySelected ? "true" : "false"}
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`projects_list grid ${layout} gap-7.5 gap-y-10`}>
          {projectData !== undefined && projectData.length > 0 ? (
            <>
              {projectData.slice(offset, offset + pageLimit).map((item) => (
                <ProjectItem key={item.id} data={item} type={type} />
              ))}
            </>
          ) : (
            <>
              <strong className="heading6">No project found!</strong>
            </>
          )}
        </div>
        <div className="list-pagination">
          <Paginator
            pageContainerClass="paginator flex items-center gap-2 w-full"
            totalRecords={projectData.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default ListProject