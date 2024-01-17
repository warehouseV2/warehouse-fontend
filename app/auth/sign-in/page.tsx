"use client";
import CustomButton from "@/app/components/ui/custom-button";
import CustomInput from "@/app/components/ui/custom-input";
import CustomLabel from "@/app/components/ui/custom-label";

import React, { useState } from "react";
import Link from "next/link";
import { IconBxlFacebook, IconGoogle, IconGithub } from "@/public/icon/sign-in";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="tw-text-center tw-w-full tw-flex tw-flex-col tw-gap-4">
      <div className="tw-h-20 tw-border tw-flex tw-justify-center tw-items-center">LOGO</div>
      <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-gap-4">
        <div className="tw-flex tw-flex-col tw-gap-1">
          <CustomLabel className="tw-text-left">Email</CustomLabel>
          <CustomInput
            type="text"
            name="email"
            placeholder="example@outlook.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <CustomLabel className="tw-text-left">Password</CustomLabel>
          <CustomInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-items-center tw-flex tw-justify-between tw-gap-2">
            <input type="checkbox" />
            <CustomLabel className="tw-text-xs">Remember me?</CustomLabel>
          </div>
          <Link href="/" className="tw-text-xs tw-font-medium tw-text-blue-600 hover:tw-underline">
            Forget Password?
          </Link>
        </div>
        <CustomButton
          type="submit"
          className={"tw-bg-themeColor tw-text-white tw-w-full hover:tw-bg-themeColor"}
        >
          Sign In
        </CustomButton>
      </form>
      <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-w-full tw-my-4  tw-border-t">
        <div className="tw-absolute tw-px-1 tw-text-base tw-bg-color tw-text-textColor">OR</div>
      </div>
      <CustomButton className={"tw-bg-white tw-text-black tw-border tw-w-full tw-h-14"}>
        <div className="tw-flex tw-justify-center tw-items-center">
          <IconGoogle className="tw-mr-2" />
          Sign in with Google
        </div>
      </CustomButton>
      <CustomButton className={"tw-bg-[#1877F2] tw-text-white tw-w-full tw-h-14"}>
        <div className="tw-flex tw-justify-center tw-items-center">
          <IconBxlFacebook className="tw-mr-2" />
          Sign in with Facebook
        </div>
      </CustomButton>
      <CustomButton className={"tw-bg-black tw-text-white tw-w-full tw-h-14"}>
        <div className="tw-flex tw-justify-center tw-items-center">
          <IconGithub className="tw-mr-2" />
          Sign in with Github
        </div>
      </CustomButton>
      <p className="tw-mt-4 tw-text-sm tw-text-center tw-text-textColor">
        Don't have an account?{" "}
        <Link href="auth/sign-up" className="tw-font-medium tw-text-blue-600 hover:tw-underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
