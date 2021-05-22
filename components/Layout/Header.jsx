import MenuBar from "./MenuBar";
import HeaderTag from "./HeaderTag";
import React from "react";
// 世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活

const Header = ({ tags }) => {
  return (
    <header className="header">
      <div className="header-top">

      </div>
      <HeaderTag nav="前端" tags={tags} />
      <style jsx> {`
      `}
      </style>
    </header>
  );
}
export default Header;