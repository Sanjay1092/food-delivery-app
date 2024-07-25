import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between px-8 border-b shadow-lg w-full fixed z-50 bg-white ">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf8RlcJGMxRvmAYnx_DWa69f1t5jfr30W6g&s"
          alt="food ordering app"
          className="size-24"
        />
      </div>

      <ul className="flex justify-between w-1/6">
        {/* <li>
          <Link to={"/"} className={textStyle}>
            Home
          </Link>
        </li> */}
        <li>
          <Link to={"/about"} className={textStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={textStyle}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

const textStyle = "font-medium text-lg hover:text-red-500";
export default Header;
