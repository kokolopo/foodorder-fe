import BottomNav from "@/components/ui/BottomNav";
import TopNav from "@/components/ui/TopNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Profile = () => {
  const username = Cookies.get("username");
  const email = Cookies.get("email");

  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav route={"/home"} />

        <div className="flex flex-col border-b-2 py-3 gap-4">
          <div className="font-semibold text-xl ">{username}</div>
          <div className="italic">{email}</div>
        </div>

        <div className="flex flex-col gap-7">
          {/* <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
            <div className="font-semibold text-slate-500">Change Username</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </div>

          <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
            <div className="font-semibold text-slate-500">Change Email</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </div> */}

          <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
            <div className="font-semibold text-slate-500">Change Password</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </div>

          <Link to={"/sign-in"} className="flex flex-row justify-between p-3 shadow-md rounded-xl hover:cursor-pointer" onClick={
            ()=>{
              Cookies.remove("username");
              Cookies.remove("email");
              Cookies.remove("token");
            }
          }>
            <div className="font-semibold text-slate-500">Sign Out</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </Link>
        </div>

        <BottomNav />
      </MainCanvas>
    </BaseLayout>
  );
};

export default Profile;
