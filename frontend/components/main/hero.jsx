import Image from "next/image";

export default function hero(props) {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
      <Image
        src={`${props.heroImage}`}
        alt="Luxury hotel rooms"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#f5c84b]">
          {props.heroSubtitle}
        </p>

        <h1 className="font-serif text-4xl font-semibold md:text-6xl">
          {props.heroTitle}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
          {props.heroDescription}
        </p>
      </div>
    </section>
  );
}
