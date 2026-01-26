import React from "react";
import { Link } from "react-router";

function HeaderShop({ title, link }) {
  return (
    <header className="bg-blue-500 h-20 flex items-center">
      <Link to={link}>
        <p className="text-4xl justify-center text-white font-bold ml-4 ">
          {title}
        </p>
      </Link>
    </header>
  );
}

export default HeaderShop;
