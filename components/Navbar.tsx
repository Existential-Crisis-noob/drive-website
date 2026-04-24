import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04050b]/70 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Image src="/drive-logo.png" alt="DRIVE logo" width={160} height={50} className="h-auto w-32 brightness-110 sm:w-40" priority />
        <a
          href="#booking"
          className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-orange"
        >
          Book a Meeting
        </a>
      </div>
    </header>
  );
}
