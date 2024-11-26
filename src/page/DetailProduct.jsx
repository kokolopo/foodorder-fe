import BottomNav from "@/components/ui/BottomNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { FormatRupiah } from "@arismun/format-rupiah";
import { ArrowLeft, PlusCircle, MinusCircle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  const [count, setCount] = useState(1);
  const price = 15000;

  return (
    <BaseLayout>
      <MainCanvas>
        {/* Food Images */}
        <div
          className="w-full h-1/2 bg-cover bg-center relative rounded-3xl overflow-hidden p-3"
          style={{
            backgroundImage: `url(https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg)`,
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-row items-center justify-between">
              <Link
                to={`/products`}
                className="bg-slate-500 bg-opacity-35 w-fit p-2 rounded-xl"
              >
                <ArrowLeft color="white" />
              </Link>

              <div className="text-white text-xl font-semibold shadow-lg">
                Detail Menu
              </div>

              <div></div>
            </div>
          </div>
        </div>

        {/* Food Name */}
        <div className="">
          <div className="text-sm font-semibold text-gray-500">
            Category Name
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="font-bold text-xl">Menu Name</div>
            <div className="flex flex-row bg-slate-100 px-2 py-1 rounded-full justify-between w-1/4">
              <MinusCircle
                className={`${count === 1 ? "pointer-events-none" : ""}`}
                onClick={() => setCount(count - 1)}
              />
              <div className="font-semibold">{count}</div>
              <PlusCircle
                className={`${count === 20 ? "pointer-events-none" : ""}`}
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-pretty">
          Occaecat aliqua duis eiusmod veniam veniam. Consectetur consectetur
          Lorem cupidatat est magna quis nostrud non eu. Commodo sunt fugiat sit
          do cupidatat laborum incididunt ad. Aliquip sint duis aliquip mollit
          consequat nostrud commodo et duis consectetur.
        </div>

        {/* Add Basket */}
        <div className="space-y-3 shadow-md px-3 py-6 rounded-xl">
          <div className="font-bold text-xl">Recommended for you</div>

          <div className="flex flex-row justify-between items-center px-4">
            <div className="flex flex-col items-center font-semibold text-xl">
              <FormatRupiah value={count * price} />
              <div className="text-sm font-semibold text-gray-500">
                Total Price
              </div>
            </div>
            <div className="bg-yellow-500 px-5 py-3 rounded-full text-white font-semibold shadow-md hover:cursor-pointer">
              Add Basket
            </div>
          </div>
        </div>

        <div className="h-20"></div>

        {/*  Bootom Navigate*/}
        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default DetailProduct;
