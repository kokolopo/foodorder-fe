import BottomNav from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/button";
import TopNav from "@/components/ui/TopNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { FormatRupiah } from "@arismun/format-rupiah";
import {
  LucideListFilter,
  SearchIcon,
  Plus,
  ChevronLeft,
  BellIcon,
  ShoppingBagIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav />

        {/* Searc nav */}
        <div className="flex flex-row space-x-7 justify-between bg-slate-100 px-2  py-2 rounded-full items-center">
          <div className="">
            <SearchIcon color="gray" />
          </div>
          <input
            className="outline-none bg-slate-100"
            type="text"
            name="search"
            placeholder="Search our products.."
          />
          <Button
            size="icon"
            className="rounded-full bg-yellow-300 hover:bg-slate-200 w-7 h-7"
          >
            <LucideListFilter color="black" />
          </Button>
        </div>

        {/* List Menu */}
        <div className="flex flex-wrap items-start gap-4 overflow-auto h-[90vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              to={`/detail-product`}
              key={index}
              className="w-[47%] p-2 shadow-lg h-fit rounded-xl space-y-2"
            >
              <div
                className="w-full h-40 bg-cover bg-center relative rounded-2xl overflow-hidden p-3"
                style={{
                  backgroundImage: `url(https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg)`,
                }}
              ></div>
              <div className="">
                <div className="text-sm text-slate-400">Category</div>
                <div className="font-semibold">Food Name</div>
              </div>

              <div className="flex flex-row items-center justify-between px-2 py-1 rounded-full shadow">
                <div className="">
                  <FormatRupiah value={12000} />
                </div>
                <div className="bg-yellow-400 p-1 rounded-full">
                  <Plus color="white" />
                </div>
              </div>
            </Link>
          ))}

          <div className="h-20"></div>
        </div>

        {/*  Bootom Navigate*/}
        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default ListMenu;
