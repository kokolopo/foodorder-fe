import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please accept the terms and conditions.");
      return;
    }
    if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        {
          fullname,
          phone,
          email,
          password,
        }
      );
      console.log(response.data);
      alert("Registration successful!"); // Menampilkan alert sukses

      // Menunggu 1 detik sebelum redirect ke halaman sign-in
      setTimeout(() => {
        navigate("/sign-in"); // Redirect ke halaman sign-in
      }, 1000); // Waktu delay 1 detik
    } catch (error) {
      // Menangani jika status code adalah 404
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;

        // Menangani error jika email sudah ada
        if (errorMessage === "Email already exists") {
          alert(
            "The email address is already registered. Please try a different one."
          );
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } else {
        // Jika error bukan status 404, log error secara umum
        console.error(error.response || error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <BaseLayout>
      <MainCanvas>
        <Link to={`/`} className="">
          <ArrowLeft size={34} className="p-1 rounded-lg border shadow-md" />
        </Link>

        <div className="text-4xl font-semibold pt-8">Register</div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex flex-col gap-4">
            <div className="grid min-w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Fullname</Label>
              <Input
                type="text"
                id="text"
                placeholder="Username"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="grid min-w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid min-w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <PhoneInput
                international
                defaultCountry="ID" // Ganti dengan negara yang diinginkan
                value={phone}
                onChange={setPhone}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter phone number"
              />
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
              <Checkbox
                id="terms"
                checked={isChecked} // Menghubungkan checkbox dengan state
                onCheckedChange={handleChange} //
              />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-amber-500 text-white w-full flex items-center justify-center py-3 rounded-full text-xl font-semibold "
          >
            Sign Up
          </button>
        </form>
      </MainCanvas>
    </BaseLayout>
  );
};

export default SignUp;
