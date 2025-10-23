import React from "react";
import TopNavOne from "./TopNav/TopNavOne";
import MenuFour from "./Menu/MenuFour";

export default function HeaderFour(props) {
  return (
    <>
      <header id="header" className="header relative z-[2]">
        <TopNavOne className={'style-four'} />
        <MenuFour />
      </header>
    </>
  );
}
