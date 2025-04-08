import Header from "@/components/Header";
import HeaderActionBar from "@/components/HeaderActionBar";
import HeroImage from "@/components/HeroImage";
import InfoBar from "@/components/InfoBar";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeaderActionBar />
      <main className="w-full">
        <HeroImage />
        <InfoBar />
        <NewsSection />
      </main>
    </div>
  );
}
