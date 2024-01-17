"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconLightUp, IconMoon } from "@/public/icon/switch-toggle";

export default function ThemeSwitchToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="tw-flex">
      <button
        onClick={handleToggle}
        className="tw-border tw-rounded-md tw-border-gray-500 tw-border-opacity-20 tw-w-11 tw-items-center tw-flex tw-justify-center"
      >
        <IconLightUp className={`tw-p-[6px] ${theme === "light" && "tw-hidden"}`} />
        <IconMoon className={`tw-p-[6px] ${theme === "dark" && "tw-hidden"}`} />
      </button>
    </div>
  );
}
