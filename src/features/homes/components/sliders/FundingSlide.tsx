
"use client"

import { useEffect, useState } from "react"
import fundingImg from "@/assets/images/funding_slider.png"

import { PrimaryCta, SlideBg } from "./SlideShared"

const START_SECONDS =
  12 * 24 * 60 * 60 + // days
  5 * 60 * 60 + // hours
  34 * 60 + // minutes
  18 // seconds

function formatCountdown(totalSeconds: number) {
  const days = Math.max(0, Math.floor(totalSeconds / (24 * 60 * 60)))
  const hours = Math.max(0, Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)))
  const minutes = Math.max(0, Math.floor((totalSeconds % (60 * 60)) / 60))
  const seconds = Math.max(0, totalSeconds % 60)

  const pad = (n: number) => n.toString().padStart(2, "0")

  return [
    { v: pad(days), label: "D" },
    { v: pad(hours), label: "H" },
    { v: pad(minutes), label: "M" },
    { v: pad(seconds), label: "S", accent: true },
  ] as const
}

export function FundingSlide() {
  const [remaining, setRemaining] = useState(START_SECONDS)

  useEffect(() => {
    if (remaining <= 0) return

    const id = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(id)
  }, [remaining])

  const parts = formatCountdown(remaining)

  return (
    <div className="relative h-full w-full">
      <SlideBg src={fundingImg} alt="Waterbomb Festival Funding" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
        <div className="w-full max-w-[21rem]">
          <div className="text-white text-[28px] font-extrabold leading-[1.05] tracking-wide">
            Waterbomb
            <br />
            Festival Funding
          </div>

          <div className="mt-5 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 text-white backdrop-blur-md ring-1 ring-white/20">
              {parts.map((t, idx) => (
                <div key={t.label} className="flex items-baseline gap-1">
                  <div
                    className={
                      "accent" in t
                        ? "text-[16px] font-extrabold tabular-nums text-emerald-300"
                        : "text-[16px] font-extrabold tabular-nums text-white/90"
                    }
                  >
                    {t.v}
                  </div>
                  <div className="text-[10px] font-bold text-white/70">
                    {t.label}
                  </div>
                  {idx !== parts.length - 1 ? (
                    <div className="mx-1 text-white/35">·</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <PrimaryCta>Participate in Web3.0 Funding</PrimaryCta>
        </div>
      </div>
    </div>
  )
}
