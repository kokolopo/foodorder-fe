import React from "react";
import { Button } from "./button";
import { BellIcon, ChevronLeft, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TopNav = ({ route }) => {
  return (
    <div className="flex flex-row justify-between ">
      <Link to={`${route}`}>
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
      </Link>

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
