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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCart from "@/state/useCart";
import Cookies from "js-cookie";

const Basket = () => {
  const [table, setTable] = useState(Cookies.get("table") || 0);
  const tax = 1000;

  const { getCart, loading, error, carts, onChange, removeFromCart, checkout,paymentURL } =
    useCart();

  useEffect(() => {
    getCart();
  }, [onChange]);

  const handleQuantityChange = (idx, cart, qty) => {
    let newData = {
      product_id: cart.product_id,
      variant_id: cart.variant_id,
      name: cart.name,
      variant: cart.variant,
      quantity: qty ? cart.quantity + 1 : cart.quantity - 1,
      price: cart.price,
      total_price: (qty ? cart.quantity + 1 : cart.quantity - 1) * cart.price,
      note: cart.note,
      image: cart.image,
    };
    onChange(idx, newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (table === 0) {
      alert("Choose Table First");
      return;
    }
    const formattedData = {
      total_amount: carts.reduce((acc, cur) => acc + cur.total_price, 0),
      table_no: parseInt(table),
      order_items: carts.map((cart) => ({
        product_id: cart.product_id,
        variant_id: cart.variant_id,
        quantity: cart.quantity,
        note: cart.note || "",
      })),
    };

    console.log(formattedData);
    checkout(formattedData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (paymentURL) {
    window.location.href = paymentURL;
  }

  return (
    <BaseLayout>
      <MainCanvas>
        {/* Top Nav */}
        <div className="flex flex-row justify-between items-center">
          <Link to={`/products`}>
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
          {carts &&
            carts.map((cart, index) => (
              <div className="pb-3 border-b-2 mb-3" key={index}>
                <div className="flex flex-row">
                  <div
                    className="w-[65%] h-32 bg-cover bg-center relative rounded-2xl overflow-hidden p-3"
                    style={{
                      backgroundImage: `url(${cart?.image})`,
                    }}
                  ></div>
                  <div className=" w-full flex flex-col justify-between px-2">
                    <div className="flex flow-row justify-between">
                      <div className="text-lg font-semibold">{cart?.name}</div>
                      <div
                        className="hover:cursor-pointer"
                        onClick={() => removeFromCart(index)}
                      >
                        <X color="gray" />
                      </div>
                    </div>
                    <div className="">{cart?.variant}</div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="font-normal ">
                          note
                        </AccordionTrigger>
                        <AccordionContent>
                          <Textarea
                            placeholder="Type your message here."
                            value={cart?.note}
                            onChange={(e) => {
                              let newData = {
                                ...cart,
                                note: e.target.value,
                              };
                              onChange(index, newData);
                            }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="flex flow-row justify-between">
                      <div className="text-lg font-semibold">
                        <FormatRupiah value={cart?.price * cart?.quantity} />
                      </div>

                      <div className="flex flex-row bg-slate-100 px-2 py-1 rounded-full justify-between gap-2">
                        <MinusCircle
                          className={`${
                            cart?.quantity === 1 ? "pointer-events-none" : ""
                          }`}
                          onClick={() =>
                            handleQuantityChange(index, cart, false)
                          }
                        />
                        <div className="font-semibold">{cart?.quantity}</div>
                        <PlusCircle
                          className={`${
                            cart?.quantity === 20 ? "pointer-events-none" : ""
                          }`}
                          onClick={() =>
                            handleQuantityChange(index, cart, true)
                          }
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
              <div className="">{table}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Subtotal</div>
              <div className="">
                <FormatRupiah
                  value={carts?.length ? carts?.reduce((acc, cur) => acc + cur?.total_price, 0) : 0}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Tax</div>
              <div className="">
                <FormatRupiah value={tax} />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">Discount</div>
              <div className="">0%</div>
            </div>
          </div>

          {/* GrandTotal */}
          <form
            onSubmit={handleSubmit}
            className={`${carts?.length ? '':'hidden'} flex flex-row justify-between items-center bg-green-500 text-white font-semibold text-lg p-3 rounded-xl hover:cursor-pointer`}
          >
            <div className="">
              <FormatRupiah
                value={
                  carts?.reduce((acc, cur) => acc + cur?.total_price, 0) + tax
                }
              />
            </div>
            
            <button type="submit" className="flex flex-row gap-3 items-center">
              <div className="">Checkout</div>
              <div className="">
                <ChevronRight />
              </div>
            </button>
          </form>
        </div>
      </MainCanvas>
    </BaseLayout>
  );
};

export default Basket;
