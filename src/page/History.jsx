import TopNav from "@/components/ui/TopNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { FormatRupiah } from "@arismun/format-rupiah";
import dateFormat, { masks } from "dateformat";
import React from "react";

const History = () => {
  const now = new Date();
  const timeOrder = dateFormat(now);

  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav />

        <div className="text-2xl font-semibold">My Orders</div>

        {/* Card Order */}
        <div className="rounded-xl shadow-xl p-3">
          <div className="flex flex-row gap-3 justify-between">
            <div className="flex flex-col">
              {/* detail */}
              <div className="font-semibold text-orange-500">🟠 On Going</div>
              <div className="font-semibold ">{timeOrder}</div>
              <div className=""> Food Name</div>
              <div className="">
                <FormatRupiah value={12500} /> x 2
              </div>
            </div>

            <div
              className="w-[47%] h-28 bg-cover bg-center relative rounded-xl overflow-hidden p-3"
              style={{
                backgroundImage: `url(https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg)`,
              }}
            ></div>
          </div>
        </div>
      </MainCanvas>
    </BaseLayout>
  );
};

export default History;
