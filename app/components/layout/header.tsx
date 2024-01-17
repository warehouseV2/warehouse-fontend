"use client";
import React from "react";
import ThemeSwitchToggle from "../theme-switch-toggle";
import CustomButton from "../ui/custom-button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-px-4  tw-py-4 tw-w-full tw-gap-2">
      <div className="tw-flex tw-items-center tw-gap-2">
        <div className="tw-w-20 tw-text-center">LOGO</div>
        <h1 className="tw-text-textColor tw-text-xl max-mobile:tw-hidden">BeefWareHouse</h1>
      </div>
      <div className="tw-flex tw-gap-2">
        <ThemeSwitchToggle />
        <Link href="/auth/sign-up">
          <CustomButton
            className={
              "tw-bg-white max-sm:tw-hidden tw-text-black tw-font-bold tw-border tw-border-gray-500 tw-border-opacity-20 tw-transition-transform tw-transform-gpu hover:tw-translate-y-[1px]"
            }
          >
            Sign Up
          </CustomButton>
        </Link>
        <Link href="/auth/sign-in">
          <CustomButton
            className={
              "max-sm:tw-hidden tw-border tw-border-themeColor tw-text-white tw-bg-themeColor tw-font-bold tw-transition-transform tw-transform-gpu hover:tw-translate-y-[1px] "
            }
          >
            Sign In
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
