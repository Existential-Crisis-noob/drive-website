import { CalendarCheck2 } from "lucide-react";

type StickyBookingButtonProps = {
  onBookClick: () => void;
};

export default function StickyBookingButton({ onBookClick }: StickyBookingButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={onBookClick}
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-l-2xl bg-gradient-to-b from-orange-500 to-amber-400 px-3 py-4 text-xs font-bold tracking-wider text-white shadow-orange transition hover:px-5 hover:shadow-[0_0_30px_rgba(255,122,0,0.45)] md:flex md:flex-col md:items-center md:gap-2"
      >
        <CalendarCheck2 className="h-4 w-4" />
        <span style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>BOOK A MEETING</span>
      </button>
      <button
        type="button"
        onClick={onBookClick}
        className="fixed bottom-4 left-4 right-4 z-50 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-center text-sm font-bold text-white shadow-orange md:hidden"
      >
        BOOK A MEETING
      </button>
    </>
  );
}
