import discoveryImg from "@/assets/images/discovery_slider.png"

import { PrimaryCta, Pill, SlideBg } from "./SlideShared"

const HOT_ITEMS = [
  { rank: "#1", name: "Midnight Echo", artist: "LUNA K" },
  { rank: "#2", name: "City Lights", artist: "NOVA" },
  { rank: "#3", name: "Neon Heart", artist: "JAYDEN" },
]

export function DiscoverySlide() {
  return (
    <div className="relative h-full w-full">
      <SlideBg src={discoveryImg} alt="VAYLA Discovery" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
        <div className="w-full max-w-[21rem]">
          <div className="text-white text-[28px] font-extrabold leading-[1.05] tracking-wide">
            VAYLA Discovery
          </div>
          <div className="mt-2 text-white/85 text-sm font-medium">
            Where fans discover
            <br />
            new artists
          </div>

          <div className="mt-4">
            <Pill className="bg-black/15">
              <span className="text-orange-400">🔥</span>
              <span className="text-white/80">HOT DISCOVERY</span>
            </Pill>
          </div>

          <div className="mt-4 space-y-2 text-left">
            {HOT_ITEMS.map((row) => (
              <div
                key={row.rank}
                className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2.5 text-white backdrop-blur-md ring-1 ring-white/15"
              >
                <div className="w-7 text-[11px] font-extrabold text-amber-300">
                  {row.rank}
                </div>
                <div className="flex-1 text-[12px] font-semibold">
                  {row.name}
                </div>
                <div className="text-[10px] font-semibold text-white/60">
                  {row.artist}
                </div>
              </div>
            ))}
          </div>

          <PrimaryCta>Explore Discovery</PrimaryCta>
        </div>
      </div>
    </div>
  )
}
