'use client'

import React from "react";
import MenuTwo from "../Header/Menu/MenuTwo";
import FooterOne from "../Footer/FooterOne";

export default function LayoutTwo(props) {
  return (
    <div className="wrap md:pt-10 pt-4 md:px-10 px-4">
      <MenuTwo />
      {props.children}
      <FooterOne className={'style-two'}  color={'blue'} />
    </div>
  );
}
