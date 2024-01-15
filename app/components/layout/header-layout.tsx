"use client";
import React from "react";
import ThemeSwitchToggle from "../theme-switch-toggle";
import CustomButton from "../custom-button";
import Link from "next/link";

export default function HeaderLayout() {
  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-px-4  tw-py-4 tw-w-full tw-gap-2">
      <div className="tw-flex tw-items-center tw-gap-2">
        <div className="tw-w-20 tw-text-center">LOGO</div>
        <h1 className="tw-text-textColor tw-text-xl">BeefWareHouse</h1>
      </div>
      <div className="">
        <h1 className="tw-text-textColor tw-text-2xl">Home</h1>
      </div>

      <div className="tw-flex tw-gap-2">
        <ThemeSwitchToggle />
        <Link href="/auth/sign-up">
          <CustomButton
            label={"Sign-Up"}
            classNameButton={
              "max-sm:tw-hidden tw-text-textColor tw-font-bold tw-border tw-border-gray-300 tw-transition-transform tw-transform-gpu hover:tw-translate-y-[1px]"
            }
          />
        </Link>
        <Link href="/auth/sign-in">
          <CustomButton
            label={"Sign-In"}
            classNameButton={
              "max-sm:tw-hidden tw-text-white tw-bg-themeColor tw-font-bold tw-transition-transform tw-transform-gpu hover:tw-translate-y-[1px] "
            }
          />
        </Link>
      </div>
    </div>
  );
}
