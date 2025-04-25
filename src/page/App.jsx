import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import React from "react";
import Image from "../image/login-image.png";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <BaseLayout>
      <MainCanvas>
        {/* Image */}
        <div className="flex items-center justify-center py-6 relative">
          <img src={Image} alt="asd" className="w-[80%]" />

          <div className="text-green-400 font-semibold text-3xl absolute top-1 left-20">
            o
          </div>
          {/* <div className="w-4 h-4 bg-red-400 absolute rounded-full left-5"></div> */}
          <div className="w-4 h-4 bg-red-400 absolute rounded-full left-5 top-[121px]"></div>
          <div className="w-4 h-4 bg-red-400 absolute rounded-full left-5 top-[132px]"></div>
          <div className="w-4 h-4 bg-red-400 absolute rounded-full left-5 top-[158px]"></div>
          <div className="w-4 h-4 bg-red-400 absolute rounded-full left-5 top-[145px]"></div>

          <div className="w-4 h-4 bg-amber-400 absolute rounded-full top-3 right-[111px]"></div>
          <div className="w-4 h-4 bg-amber-400 absolute rounded-full top-3 right-[125px]"></div>
          <div className="w-4 h-4 bg-amber-400 absolute rounded-full top-3 right-[138px]"></div>
          <div className="w-4 h-4 bg-amber-400 absolute rounded-full top-3 right-[150px]"></div>

          <div className="w-4 h-4 bg-green-400 absolute rounded-full bottom-4 left-[155px]"></div>
          <div className="w-4 h-4 bg-green-400 absolute rounded-full bottom-4 left-[169px]"></div>
          <div className="w-4 h-4 bg-green-400 absolute rounded-full bottom-4 left-[181px]"></div>
          <div className="w-4 h-4 bg-green-400 absolute rounded-full bottom-4 left-[194px]"></div>

          <div className="text-amber-400 font-semibold text-4xl absolute bottom-12 left-14">
            o
          </div>

          <div className="text-red-400 font-semibold text-2xl absolute bottom-14 right-8">
            o
          </div>

          <div className="text-blue-400 font-semibold text-4xl absolute top-14 right-12">
            o
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-2xl font-bold">Happy Meal, Guys!</div>
          <div className="text-base text-center text-slate-500">
            Ea non tempor consectetur labore laboris culpa do exercitation
            mollit magna laboris elit. Consequat magna nulla mollit irure Lorem
            ea fugiat. Labore magna tempor enim ex commodo.
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col justify-between px-3 gap-2">
          <Link
            to={`/sign-in`}
            className="bg-teal-500 text-white px-11 py-2 text-xl font-semibold rounded-full shadow-lg text-center"
          >
            Sign In
          </Link>
          <Link
            to={`/sign-up`}
            className="bg-amber-500 text-white px-11 py-2 text-xl font-semibold rounded-full shadow-lg text-center"
          >
            Sign Up
          </Link>
        </div>
      </MainCanvas>
    </BaseLayout>
  );
};

export default App;
