import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BottomNav from "@/components/ui/BottomNav";
import { Textarea } from "@/components/ui/textarea";
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
        <TopNav route={"/home"} />

        <div className="text-2xl font-semibold">My Orders</div>

        <div className="flex flex-wrap items-start gap-4 overflow-auto h-[80vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-xl border shadow-md p-3 w-full">
              <div className="flex flex-row gap-3 justify-between">
                <div className="flex flex-col">
                  {/* detail */}
                  <div className="font-semibold text-orange-500">
                    🟠 On Going
                  </div>
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

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="font-normal m-0 p-0">
                    Note
                  </AccordionTrigger>
                  <AccordionContent>
                    <Textarea placeholder="Type your message here." disabled />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
          <div className="h-20"></div>
        </div>

        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default History;
