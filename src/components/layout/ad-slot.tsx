"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdSlot({ format = "auto", className }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (!publisherId || !adRef.current || adRef.current.querySelector("ins")) return;

    try {
      const ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      ins.setAttribute("data-ad-client", publisherId);
      ins.setAttribute("data-ad-slot", format === "horizontal" ? "72890" : format === "rectangle" ? "300250" : "auto");
      ins.setAttribute("data-ad-format", format === "horizontal" ? "horizontal" : format === "rectangle" ? "rectangle" : "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      adRef.current.appendChild(ins);

      try {
        const w = window as unknown as { adsbygoogle?: Array<Record<string, unknown>> };
        w.adsbygoogle?.push({});
      } catch {
        // AdSense script not loaded yet — will be picked up on load
      }
    } catch {
      // AdSense not available
    }
  }, [format, publisherId]);

  if (!publisherId) {
    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed border-border rounded-lg text-[var(--muted)] text-sm bg-[var(--surface-alt)] ${className || "h-[90px]"}`}
      >
        Ad Placeholder
      </div>
    );
  }

  return (
    <div ref={adRef} className={className || "min-h-[90px]"} />
  );
}
