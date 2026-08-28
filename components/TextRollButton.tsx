"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TextRollButtonProps {
  text?: string;
  href?: string;
  variant?: "dark" | "gold";
  className?: string;
  onClick?: () => void;
}

export default function TextRollButton({
  text = "Book a strategy call",
  href = "/contact",
  variant = "dark",
  className = "",
  onClick,
}: TextRollButtonProps) {
  const isGold = variant === "gold";

  const buttonClasses = isGold
    ? "bg-[#F2C230] hover:bg-[#D9AC1F] text-gray-900 text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 group inline-flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer select-none"
    : "bg-gray-900 hover:bg-black text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 group inline-flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer select-none";

  const circleClasses = isGold
    ? "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
    : "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F2C230] text-gray-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105";

  const content = (
    <>
      {/* Strictly bounded 20px viewport for kinetic text roll */}
      <span
        style={{
          height: "20px",
          maxHeight: "20px",
          overflow: "hidden",
          display: "inline-block",
          position: "relative",
          lineHeight: "20px",
          verticalAlign: "middle",
        }}
        className="select-none"
      >
        <span
          className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2"
          style={{ willChange: "transform" }}
        >
          <span
            style={{ height: "20px", lineHeight: "20px" }}
            className="whitespace-nowrap flex items-center"
          >
            {text}
          </span>
          <span
            style={{ height: "20px", lineHeight: "20px" }}
            className="whitespace-nowrap flex items-center"
            aria-hidden="true"
          >
            {text}
          </span>
        </span>
      </span>

      <span className={circleClasses}>
        <ArrowRight
          size={14}
          strokeWidth={2.2}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </span>
    </>
  );

  if (onClick || !href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${buttonClasses} ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={`${buttonClasses} ${className}`}>
      {content}
    </Link>
  );
}
