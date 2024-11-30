import { Button } from "@/components/ui/button";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { FormatRupiah } from "@arismun/format-rupiah";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  MinusCircle,
  PlusCircle,
  ReceiptTextIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Basket = () => {
  const [count, setCount] = useState(1);
  const price = 15000;
  return (
    <BaseLayout>
      <MainCanvas>
        {/* Top Nav */}
        <div className="flex flex-row justify-between items-center">
          <Link to={`/home`}>
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
          </Link>

          <div className="font-semibold text-xl">Cart</div>

          <div className="flex flex-row space-x-12">
            <Link to={`/history`}>
              <Button variant="outline" size="icon" to>
                <ReceiptTextIcon />
              </Button>
            </Link>
          </div>
        </div>

        {/* card */}
        <ScrollArea className="h-[55%] w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="pb-3 border-b-2 mb-3">
              <div className="flex flex-row">
                <div
                  className="w-[65%] h-32 bg-cover bg-center relative rounded-2xl overflow-hidden p-3"
                  style={{
                    backgroundImage: `url(https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg)`,
                  }}
                ></div>
                <div className=" w-full flex flex-col justify-between px-2">
                  <div className="flex flow-row justify-between">
                    <div className="text-lg font-semibold">Food Name</div>
                    <div>
                      <X color="gray" />
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="font-normal ">
                        note
                      </AccordionTrigger>
                      <AccordionContent>
                        <Textarea placeholder="Type your message here." />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flow-row justify-between">
                    <div className="text-lg font-semibold">
                      <FormatRupiah value={count * price} />
                    </div>

                    <div className="flex flex-row bg-slate-100 px-2 py-1 rounded-full justify-between gap-2">
                      <MinusCircle
                        className={`${
                          count === 1 ? "pointer-events-none" : ""
                        }`}
                        onClick={() => setCount(count - 1)}
                      />
                      <div className="font-semibold">{count}</div>
                      <PlusCircle
                        className={`${
                          count === 20 ? "pointer-events-none" : ""
                        }`}
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Checkout */}
        <div className="w-full flex flex-col gap-5">
          {/* promocode */}
          <div className="border-2 bg-white p-3 rounded-xl">
            <input
              type="text"
              name="promocode"
              className="w-full px-2 focus:outline-none"
              placeholder="Promocode"
            />
          </div>

          {/* Detail */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between font-semibold">
              <div className="">Table No</div>
              <div className="">12</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Subtotal</div>
              <div className="">
                <FormatRupiah value={count * price} />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Tax</div>
              <div className="">
                <FormatRupiah value={count * price} />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Discount</div>
              <div className="">0%</div>
            </div>
          </div>

          {/* GrandTotal */}
          <div className="flex flex-row justify-between items-center bg-green-500 text-white font-semibold text-lg p-3 rounded-xl">
            <div className="">
              <FormatRupiah value={count * price} />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="">Checkout</div>
              <div className="">
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </MainCanvas>
    </BaseLayout>
  );
};

export default Basket;
