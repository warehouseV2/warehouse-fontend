import React from "react";

interface CustomButtonProps {
  label: String;
  classNameButton: String;
}

export default function CustomButton(props: CustomButtonProps) {
  const { label, classNameButton } = props;
  return (
    <button
      className={`${classNameButton} tw-py-2 tw-px-5 tw-rounded-full hover:tw-shadow-lg`}
    >
      {label}
    </button>
  );
}
