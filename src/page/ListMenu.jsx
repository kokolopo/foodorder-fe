import BottomNav from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/button";
import TopNav from "@/components/ui/TopNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import useMenu from "@/state/useMenu";
import { FormatRupiah } from "@arismun/format-rupiah";
import {
  LucideListFilter,
  SearchIcon,
  Plus,
  ChevronLeft,
  BellIcon,
  ShoppingBagIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListMenu = () => {
  const { data, loading, error, fetchMenu, setData } = useMenu();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter(
      (product) =>
        product.Name.toLowerCase().includes(term) ||
        product.Category.Name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  const listProduct =
    data &&
    filteredData.map((product, index) => (
      <Link
        to={`/detail-product/${product.ID}`}
        key={index}
        className="w-[47%] p-2 shadow-lg h-fit rounded-xl space-y-2"
      >
        <div
          className="w-full h-40 bg-cover bg-center relative rounded-2xl overflow-hidden p-3"
          style={{
            backgroundImage: `url(${product.Image})`,
          }}
        ></div>
        <div className="">
          <div className="text-sm text-slate-400">{product.Category.Name}</div>
          <div className="font-semibold">{product.Name}</div>
        </div>

        <div className="flex flex-row items-center justify-between px-2 py-1 rounded-full shadow">
          <div className="">
            <FormatRupiah value={product.Price} />
          </div>
          <div className="bg-yellow-400 p-1 rounded-full">
            <Plus color="white" />
          </div>
        </div>
      </Link>
    ));

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav route={"/home"} />

        {/* Searc nav */}
        <div className="flex flex-row space-x-7 justify-between bg-slate-100 px-3 py-2 rounded-full items-center">
          <div className="flex flex-row gap-2">
            <div className="">
              <SearchIcon color="gray" />
            </div>
            <input
              className="outline-none bg-slate-100 w-full"
              type="text"
              name="search"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Button
            size="icon"
            className="rounded-full bg-yellow-300 hover:bg-slate-200 w-9 h-9"
          >
            <LucideListFilter color="black" />
          </Button>
        </div>

        {/* List Menu */}
        <div className="flex flex-wrap items-start gap-4 overflow-auto h-[67vh]">
          {data && listProduct}

          <div className="h-20"></div>
        </div>

        {/*  Bootom Navigate*/}
        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default ListMenu;
