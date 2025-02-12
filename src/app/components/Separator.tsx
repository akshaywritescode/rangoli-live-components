"use client";

type TSeparator = {
  className?: string
}

export default function Separator({ className }: TSeparator) {

  return (
    <div
      className={`${className} h-[1px]`}
    ></div>
  );
}
