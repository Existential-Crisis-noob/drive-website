import AnimatedSection from "./AnimatedSection";

export default function NoWebsiteSection() {
  return (
    <AnimatedSection>
      <div className="section-container">
        <div className="glass-card rounded-2xl p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Don&apos;t have a website? We&apos;ve got you.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/75">
            We help you build your online presence from the ground up, so your business can reach the right audience and turn attention into customers.
          </p>
          <a
            href="#booking"
            className="mt-7 inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 font-semibold text-white transition hover:shadow-orange"
          >
            Start Building Your Presence
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
