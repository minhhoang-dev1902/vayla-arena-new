import discoveryCardImg from "@/assets/images/discovery_card.png"
import fundingCardImg from "@/assets/images/funding_card.png"
import voteCardImg from "@/assets/images/vote_card.png"
import { ActionCard } from "@/share/components/custom/action-card/ActionCard"
import Slider from "@/features/homes/components/sliders/Slider"

const ACTION_CARDS = [
  {
    tag: "FUNDING",
    title: "Participate in Web3 funding projects",
    image: fundingCardImg,
    ctaLabel: "Explore Funding",
  },
  {
    tag: "V-ONCHAIN CHART",
    title: "Vote and influence on-chain rankings",
    image: voteCardImg,
    ctaLabel: "View Chart",
  },
  {
    tag: "DISCOVERY",
    title: "Discover and support new creators",
    image: discoveryCardImg,
    ctaLabel: "Go to Discovery",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <Slider />

      <section className="flex flex-col gap-4 px-4">
        {ACTION_CARDS.map((card) => (
          <ActionCard
            key={card.tag}
            tag={card.tag}
            title={card.title}
            image={card.image}
            ctaLabel={card.ctaLabel}
          />
        ))}
      </section>

      <section className="mt-2 flex flex-col gap-4 px-4">
        <div className="rounded-3xl bg-white px-5 py-5 text-left text-slate-800 shadow-sm">
          <h2 className="text-[15px] font-semibold text-emerald-700">
            What is VAYLA Arena?
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            VAYLA Arena is a Web3-powered platform where fans participate directly in music,
            events, and creative projects through funding, voting, and rewards.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-emerald-50 px-5 py-5 text-left text-slate-800 shadow-sm ring-1 ring-emerald-500/15">
          <h2 className="text-[15px] font-semibold text-emerald-700">
            VAYLA Token
          </h2>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Ecosystem Utility
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            VAYLA Token powers the entire ecosystem. It is used for voting, rewards,
            and unlocking premium benefits.
          </p>

          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-500"
          >
            More details
            <span className="text-sm">↗</span>
          </button>

          <div className="pointer-events-none absolute right-5 top-5 h-6 w-6 rounded-full border border-emerald-200 bg-emerald-50 shadow-[0_0_0_4px_rgba(16,185,129,0.08)]" />
          <div className="pointer-events-none absolute right-5 top-5 h-3.5 w-3.5 rounded-full bg-emerald-500/90" />
        </div>
      </section>
    </div>
  )
}