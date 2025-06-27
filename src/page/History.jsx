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
import useHistory from "@/state/useHistory";
import { FormatRupiah } from "@arismun/format-rupiah";
import dateFormat, { masks } from "dateformat";
import React, { useEffect } from "react";

const History = () => {
  const now = new Date();
  const timeOrder = dateFormat();
  const { histories, loading, error, getHistories } = useHistory();

  const orderStatus = {
    Created: ["🟠 Pay now", "text-orange-500"],
    Paid: ["🔵 Paid Confirmed", "text-blue-500"],
    Progress: ["🟣 On Progress", "text-purple-500"],
    Delivered: ["🟢 Delivered", "text-green-500"],
    CANCELLED: ["🔴 Cancelled", "text-red-500"],
  };

  useEffect(() => {
    getHistories();
  }, []);

  const handleOnClick = (data, url) => {
    if (data.status === "Created") {
      window.location.href = url;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav route={"/home"} />

        <div className="text-2xl font-semibold">My Orders</div>

        <div className="flex flex-wrap items-start gap-4 overflow-auto h-[80vh]">
          {histories &&
            histories.map((history, index) => (
              <div
                key={index}
                className="rounded-xl border shadow-md p-3 w-full"
              >
                <div className="flex flex-row gap-3 justify-between">
                  <div className="flex flex-col">
                    {/* detail */}
                    <div
                      className={`font-semibold hover:cursor-pointer ${
                        orderStatus[history?.status][1]
                      }`}
                      onClick={() =>
                        handleOnClick(history, history?.payment_url)
                      }
                    >
                      {orderStatus[history?.status][0]}
                    </div>
                    <div className="font-semibold ">
                      {dateFormat(history?.created_at)}
                    </div>
                    <div className="">{history?.product_name}</div>
                    <div className="">{history?.variant}</div>
                    <div className="">
                      <FormatRupiah value={history?.product_price} /> x{" "}
                      {history?.quantity}
                    </div>
                  </div>

                  <div
                    className="w-[47%] h-28 bg-cover bg-center relative rounded-xl overflow-hidden p-3"
                    style={{
                      backgroundImage: `url(${history?.product_image})`,
                    }}
                  ></div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="font-normal m-0 p-0">
                      Note
                    </AccordionTrigger>
                    <AccordionContent>
                      <Textarea
                        placeholder="Type your message here."
                        disabled
                        value={history?.note}
                      />
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
