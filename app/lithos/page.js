import SpotlightRevealHero from "@/components/SpotlightRevealHero";

export const metadata = {
  title: "Lithos — Layers Hold Tales of Time | Interactive Geology Maps",
  description:
    "Interactive geology brand featuring dynamic cursor-following spotlight reveal layers. Peel back the crust to trace how stones, fossils, and deep time combine.",
};

export default function LithosPage() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <SpotlightRevealHero initialMode="lithos" showModeSwitcher={true} isStandalone={true} />
    </main>
  );
}
