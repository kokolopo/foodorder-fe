import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <BaseLayout>
      <MainCanvas>
        <Link to={`/`} className="">
          <ArrowLeft size={34} className="p-1 rounded-lg border shadow-md" />
        </Link>

        <div className="text-4xl font-semibold pt-8">Register</div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div className="grid min-w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="text" placeholder="Username" />
          </div>
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
          <div>
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <PasswordInput
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* TnC */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>

        {/* Button */}
        <Link
          to={"/sign-in"}
          className="bg-amber-500 text-white w-full flex items-center justify-center py-3 rounded-full text-xl font-semibold "
        >
          Sign Up
        </Link>
      </MainCanvas>
    </BaseLayout>
  );
};

export default SignUp;
