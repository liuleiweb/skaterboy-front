import React from "react";
import Link from "next/link";

const MenuBar = () => {
  return (
    <nav>
      <li>
        <Link href="/">
          <div className="menu-item">
            <i className="icon iconfont icon-menu">&#xe64f;</i>
            <span className="menu-item-title">集合</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="menu-item">
            <i className="icon iconfont icon-menu">&#xe64f;</i>
            <span className="menu-item-title">微语</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="menu-item">
            <i className="icon iconfont icon-menu">&#xe64f;</i>
            <span className="menu-item-title">关于</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="menu-item">
            <i className="icon iconfont icon-menu">&#xe64f;</i>
            <span className="menu-item-title">源代码</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="menu-item">
            <i className="icon iconfont icon-menu">&#xe64f;</i>
            <span className="menu-item-title">文档</span>
          </div>
        </Link>
      </li>
      <style jsx> {`
        li {
          list-style: none;
        }
        .menu-item {
          padding: 8px 10px;
          border-radius: 2px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .menu-item:hover {
          background: #eaeaea;
        }
        .menu-item-title {
            display: inline-block;
            margin-left: 15px;
            color: #666666;
          }
      `}
      </style>
    </nav>
  );
}
export default MenuBar;