import vonChartImg from "@/assets/images/von-chart_slider.png"

import { PrimaryCta, Pill, SlideBg } from "./SlideShared"

export function VonChartSlide() {
  return (
    <div className="relative h-full w-full">
      <SlideBg src={vonChartImg} alt="V-ONCHAIN CHART" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
        <div className="w-full max-w-[21rem]">
          <Pill className="mb-4">
            <span className="inline-flex h-2 w-2 rounded-full bg-rose-500" />
            <span>LIVE VOTING NOW</span>
          </Pill>

          <div className="text-white text-[28px] font-extrabold leading-[1.05] tracking-wide">
            V-ONCHAIN CHART
          </div>
          <div className="mt-2 text-white/85 text-sm font-medium">
            Fans decide the ranking
          </div>
          <div className="mt-2 text-emerald-300/90 text-xs font-semibold">
            Powered by Fandom Token Voting
          </div>

          <PrimaryCta>Participate in Vote &amp; Earn Rewards</PrimaryCta>
        </div>
      </div>
    </div>
  )
}
