import SpotlightRevealHero from "@/components/SpotlightRevealHero";

export const metadata = {
  title: "Interactive Spotlight Reveal Engine | Bits & Builds",
  description:
    "Explore our interactive cursor-following spotlight reveal engine built with pure React 18, HTML5 canvas radial gradient masking, and smooth physics.",
};

export default function SpotlightPage() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <SpotlightRevealHero initialMode="lithos" showModeSwitcher={true} isStandalone={true} />
    </main>
  );
}
