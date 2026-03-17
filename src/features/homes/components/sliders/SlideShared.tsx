import Image from "next/image"
import type { StaticImageData } from "next/image"

export function SlideBg({
  src,
  alt,
}: {
  src: StaticImageData
  alt: string
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 640px) 100vw, 640px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
    </>
  )
}

export function PrimaryCta({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="mt-7 w-full rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 active:scale-[0.99]"
    >
      {children}
    </button>
  )
}

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md ring-1 ring-white/15",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}
