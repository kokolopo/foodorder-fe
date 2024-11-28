import TopNav from "@/components/ui/TopNav";
import BaseLayout from "@/layout/BaseLayout";
import MainCanvas from "@/layout/MainCanvas";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <BaseLayout>
      <MainCanvas>
        <TopNav />

        <div className="flex flex-col border-b-2 py-3 gap-4">
          <div className="font-semibold text-xl ">Username</div>
          <div className="italic">user@mail.com</div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
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
          </div>

          <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
            <div className="font-semibold text-slate-500">Change Password</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </div>

          <div className="flex flex-row justify-between p-3 shadow-md rounded-xl">
            <div className="font-semibold text-slate-500">Sign Out</div>
            <div className="">
              <ChevronRightIcon color="gray" />
            </div>
          </div>
        </div>
      </MainCanvas>
    </BaseLayout>
  );
};

export default Profile;
