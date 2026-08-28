import React from "react";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import Tilt3DCard from "@/components/Tilt3DCard";

export default function ServiceCard({ service }) {
  return (
    <Tilt3DCard maxTilt={8} scale={1.02} className="h-full rounded-3xl">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-7 transition-all duration-300 hover:border-[#F2C230]/60 hover:shadow-[0_12px_32px_rgba(242,194,48,0.12)] min-h-[300px] h-full text-gray-900 dark:text-white"
      >
        {/* Top row: Icon + Tag + Arrow */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A0A0A] dark:bg-black text-[#F2C230] font-semibold text-sm shadow-xs transition-transform group-hover:scale-110 duration-300 border border-transparent dark:border-white/10"
              style={{ transform: "translateZ(20px)" }}
            >
              <ServiceIcon slug={service.slug} className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-900 bg-[#F2C230] px-2.5 py-0.5 rounded-full mr-2">
                {service.tag}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                {service.badge}
              </span>
            </div>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:bg-[#F2C230] group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs font-bold">
            ↗
          </span>
        </div>

        {/* Content */}
        <div className="my-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-[#D9AC1F] dark:group-hover:text-[#F2C230] transition-colors tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
            {service.short}
          </p>
        </div>

        {/* Bottom: Highlight metric */}
        <div className="border-t border-gray-100 dark:border-white/10 pt-4 flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400 font-medium">Proven metric:</span>
          <span className="text-gray-900 dark:text-[#F2C230] font-semibold bg-[#F5F5F5] dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/10">
            {service.caseHighlight.metric}
          </span>
        </div>
      </Link>
    </Tilt3DCard>
  );
}
