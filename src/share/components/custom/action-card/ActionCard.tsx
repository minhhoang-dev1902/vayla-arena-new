import Image, { type StaticImageData } from "next/image"

type ActionCardProps = {
  tag: string
  title: string
  description?: string
  image: StaticImageData
  ctaLabel: string
}

export function ActionCard({
  tag,
  title,
  description,
  image,
  ctaLabel,
}: ActionCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/10">
      <div className="px-5 pt-4 pb-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-500">
          [{tag}]
        </div>
        <div className="mt-1.5 text-sm font-semibold text-slate-900">
          {title}
        </div>
        {description ? (
          <div className="mt-1 text-xs text-slate-500">{description}</div>
        ) : null}
      </div>

      <div className="mx-4 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>

      <button
        type="button"
        className="m-4 mt-3 w-[calc(100%-2rem)] rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-emerald-500/25 active:scale-[0.99]"
      >
        {ctaLabel}
      </button>
    </div>
  )
}

