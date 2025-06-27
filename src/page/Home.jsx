import React, { useEffect } from "react";
import {
  ChevronLeft,
  BellIcon,
  ShoppingBagIcon,
  SearchIcon,
  LucideListFilter,
  HomeIcon,
  User,
  PizzaIcon,
  ReceiptTextIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Button } from "@/components/ui/button";
import BaseLayout from "../layout/BaseLayout";
import MainCanvas from "../layout/MainCanvas";
import BottomNav from "@/components/ui/BottomNav";
import { Link } from "react-router-dom";
import TopNav from "@/components/ui/TopNav";
import useMenu from "@/state/useMenu";

const Home = () => {
  const { data, fetchMenu, fetchCategories, categories } = useMenu();

  useEffect(() => {
    fetchMenu();
    fetchCategories();
  }, [fetchMenu, fetchCategories]);
  // console.log({ categories });

  return (
    <BaseLayout>
      <MainCanvas>
        {/* Top Navigation */}
        <TopNav />

        {/* Promotion Benner */}
        <div className="flex flex-col items-center justify-center w-full bg-slate-100 rounded-2xl py-8 px-4 space-y-3">
          <div className="font-bold text-3xl text-center">
            What would you <br />
            like to order?
          </div>

          <div className="flex flex-row gap-2 bg-white pl-4 pr-3 py-2 rounded-full items-center">
            <SearchIcon color="gray" />
            <input
              className="outline-none"
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
        </div>

        <div className="overflow-auto h-[50vh]">
          {/* Label Our Menu */}
          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center">
              <div className="text-lg font-semibold">Our Menu</div>
              <Link to={"/products"} className="text-sm">
                Show All
              </Link>
            </div>

            <div className="">
              <Carousel
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent>
                  {categories &&
                    categories.map((category, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-[24%] flex flex-col items-center mr-6"
                      >
                        <img
                          src="https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg"
                          alt="gambar"
                          className="rounded-full"
                        />
                        <div className="font-semibold">{category?.Name}</div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Promo Menu */}
          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center">
              <div className="text-lg font-semibold">Promo</div>
              <Link to={"/products"} className="text-sm">
                Show All
              </Link>
            </div>

            <div className="">
              <Carousel
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent>
                  {data &&
                    data.slice(0, 3).map((val, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-[66%] flex flex-col mr-4 space-y-1"
                      >
                        <Link
                          to={`/detail-product`}
                          className="w-56 h-36 bg-cover bg-center relative rounded-lg overflow-hidden p-3"
                          style={{
                            backgroundImage: `url(${val.Image})`,
                          }}
                        >
                          <div className="flex flex-col justify-between h-full">
                            <div className="bg-white w-fit px-2 py-1 rounded-full text-xs font-semibold">
                              {val.Category.Name}
                            </div>
                            <div className="text-xl items-center flex justify-center">
                              <div className="bg-white bg-opacity-45 rounded-xl p-2 font-bold text-red-400">
                                %20
                              </div>
                            </div>

                            <div className="flex flow-row justify-between font-semibold text-white">
                              <div className="">{val.Name}</div>
                              <div className="">
                                <FormatRupiah value={val.Price} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Label Popular */}
          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center">
              <div className="text-lg font-semibold">Popular</div>
              <Link to={"/products"} className="text-sm">
                Show All
              </Link>
            </div>

            <div className="">
              <Carousel
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent>
                  {data &&
                    data.slice(2, 5).map((val, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-[66%] flex flex-col mr-4 space-y-1"
                      >
                        <Link
                          to={`/detail-product`}
                          className="w-56 h-36 bg-cover bg-center relative rounded-lg overflow-hidden p-3"
                          style={{
                            backgroundImage: `url(${val.Image})`,
                          }}
                        >
                          <div className="flex flex-col justify-between h-full">
                            <div className="bg-white w-fit px-2 py-1 rounded-full text-xs font-semibold">
                              {val.Category.Name}
                            </div>
                            <div className="text-xl items-center flex justify-center">
                              <div className="bg-white bg-opacity-45 rounded-xl p-2 font-bold text-red-400">
                                %20
                              </div>
                            </div>

                            <div className="flex flow-row justify-between font-semibold text-white">
                              <div className="">{val.Name}</div>
                              <div className="">
                                <FormatRupiah value={val.Price} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          <div className="h-20"></div>
        </div>

        {/*  Bootom Navigate*/}
        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default Home;
