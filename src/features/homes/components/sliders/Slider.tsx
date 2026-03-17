import CustomSlider from "@/share/components/custom/slider/CustomSlider"

import { DiscoverySlide } from "./DiscoverySlide"
import { FundingSlide } from "./FundingSlide"
import { VonChartSlide } from "./VonChartSlide"

export default function Slider() {
  return (
    <CustomSlider
      autoplay
      autoplayIntervalMs={4500}
      slides={[
        { id: "vonchain-chart", content: <VonChartSlide /> },
        { id: "discovery", content: <DiscoverySlide /> },
        { id: "funding", content: <FundingSlide /> },
      ]}
    />
  )
}
