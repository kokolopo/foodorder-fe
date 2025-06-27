import BottomNav from "@/components/ui/BottomNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import useCart from "@/state/useCart";
import useMenu from "@/state/useMenu";
import { FormatRupiah } from "@arismun/format-rupiah";
import { ArrowLeft, PlusCircle, MinusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const DetailProduct = () => {
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState("");

  const { fetchMenuByID, product, loading, error } = useMenu();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenuByID(productId);
  }, [productId]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      alert("Please login first");
      navigate("/sign-in");
      return;
    }
    if (!variant) {
      alert("Please select variant");
      return;
    }


    const menus = [];
    const req = {
      product_id: parseInt(productId),
      variant_id: parseInt(variant),
      name: product?.Name,
      variant: product?.Variants.find((v) => v.ID === parseInt(variant))?.Name,
      quantity: count,
      price: product?.Price,
      total_price: count * product?.Price,
      note: "",
      image: product?.Image,
    };
    menus.push(req);
    console.log({ menus });
    addToCart({ menus });
    setVariant("");
    setCount(1);

    alert("Menu added to cart");
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
        {/* Food Images */}
        <div
          className="w-full h-1/2 bg-cover bg-center relative rounded-3xl overflow-hidden p-3"
          style={{
            backgroundImage: `url(${product?.Image})`,
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
            {product?.Category.Name}
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="font-bold text-xl">{product?.Name}</div>
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
          <p>{product?.Description}</p>
        </div>

        {/* Choose variant */}
        {product?.Variants.length > 0 && (
          <div className="mt-4">
            <label
              htmlFor="variant"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose Variant
            </label>
            <select
              required
              id="variant"
              name="variant"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={variant} // controlled select
              onChange={(e) => setVariant(e.target.value)} // update variant state
            >
              <option value="" disabled>
                Select a variant
              </option>
              {product?.Variants.map((v) => (
                <option key={v.ID} value={v.ID}>
                  {v.Name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Add Basket */}
        <form
          onSubmit={handleOnSubmit}
          className="space-y-3 shadow-md px-3 py-6 rounded-xl"
        >
          <div className="font-bold text-xl">Recommended for you</div>

          <div className="flex flex-row justify-between items-center px-4">
            <div className="flex flex-col items-center font-semibold text-xl">
              <FormatRupiah value={count * product?.Price} />
              <div className="text-sm font-semibold text-gray-500">
                Total Price
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 px-5 py-3 rounded-full text-white font-semibold shadow-md hover:cursor-pointer"
            >
              Add Basket
            </button>
          </div>
        </form>

        <div className="h-20"></div>

        {/*  Bootom Navigate*/}
        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default DetailProduct;
