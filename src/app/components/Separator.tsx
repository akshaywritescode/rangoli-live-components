"use client";
export default function Separator({ className }: { className?: string }) {

  return (
    <div
      className={`${className} w-full h-[1px]`}
    ></div>
  );
}
