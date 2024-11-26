import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import Image from "../image/login-image.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { ArrowLeft } from "lucide-react";

const SignIn = () => {
  const [password, setPassword] = useState("");

  return (
    <BaseLayout>
      <MainCanvas>
        {/* Image */}
        <div className="flex items-center justify-center py-6 relative">
          <Link to={`/`} className="absolute top-0 left-0">
            <ArrowLeft size={34} className="p-1 rounded-lg border shadow-md" />
          </Link>

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

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div className="grid min-w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* Button */}
        <Link
          to={"/home"}
          className="bg-amber-500 text-white w-full flex items-center justify-center py-3 rounded-full text-xl font-semibold"
        >
          Sign In
        </Link>
      </MainCanvas>
    </BaseLayout>
  );
};

export default SignIn;
