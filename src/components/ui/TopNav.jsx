import React, { useState } from "react";
import { Button } from "./button";
import { BellIcon, ChevronLeft, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopNav = ({ route = "/home" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [table, setTable] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row justify-between ">
      <Link to={`${route}`}>
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
      </Link>

      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-[9px] bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Table No.
          <div className="">{table}</div>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="p-2 overflow-auto h-[10vh]">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  className="hover:bg-amber-500"
                  onClick={() => {
                    setTable(index);
                    toggleDropdown();
                  }}
                >
                  {index}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-row space-x-12">
        <Button variant="outline" size="icon">
          <BellIcon />
        </Button>

        <Link to={`/basket`}>
          <Button variant="outline" size="icon" to>
            <ShoppingBagIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
