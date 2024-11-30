import { HomeIcon, PizzaIcon, ReceiptTextIcon, User } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="w-full flex flex-row justify-between items-center shadow-xl p-4 fixed bottom-0 left-0 bg-white border border-t-1">
      <Link
        to={"/home"}
        className={`${
          location.pathname == "/home"
            ? "bg-teal-600 p-2 rounded-full text-white"
            : "text-gray-400"
        }`}
      >
        <HomeIcon className="w-8 h-8" />
      </Link>

      <Link
        to={"/products"}
        className={`${
          location.pathname == "/products"
            ? "bg-teal-600 p-2 rounded-full text-white"
            : "text-gray-400"
        }`}
      >
        <PizzaIcon className="w-8 h-8" />
      </Link>

      <Link
        to={"/history"}
        className={`${
          location.pathname == "/history"
            ? "bg-teal-600 p-2 rounded-full text-white"
            : "text-gray-400"
        }`}
      >
        <ReceiptTextIcon className="w-8 h-8" />
      </Link>

      <Link
        to={"/profile"}
        className={`${
          location.pathname == "/profile"
            ? "bg-teal-600 p-2 rounded-full text-white"
            : "text-gray-400"
        }`}
      >
        <User className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default BottomNav;
