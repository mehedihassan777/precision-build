import React from "react";
import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuOne() {
  return (
    <div className="menu_main relative h-15 border-t border-outline">
      <div className="container flex items-center justify-between h-full bg-white">
        {/* <button className="menu_icons_btn js_btn_open_popup lg:hidden">
          <Icon.List className="text-2xl" />
          <span className="blind">button menu mobile</span>
        </button> */}
        <Navigator className={'style-one'} />
        <MenuFunctionIcons type={'style-one'} />
      </div>
    </div>
  );
}
