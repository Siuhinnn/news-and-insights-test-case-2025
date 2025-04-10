"use client";

import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import BadgeLabel from "@/components/ui/BadgeLabel";

const articles = [
  {
    id: 1,
    title: "SFC bans Chan Ka Him for life for insurance fraud",
    url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=24PR15",
    date: "Jan 5, 2025",
    content:
      "The Securities and Futures Commission (SFC) has reprimanded and fined PICC Asset Management (Hong Kong) Company Limited (PICC) $2.8 million over its failures to discharge duties as the manager of a Cayman-incorporated fund between May 2018 and May 2020 (Note 1).",
  },
  {
    id: 2,
    title:
      "SFC secures first conviction against a solicitor for breaching secrecy provision",
    url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=24PR109",
    date: "Jan 1, 2025",
    content:
      "The Securities and Futures Commission (SFC) has suspended Mr Shum Wai Nap, former licensed representative of PICC Asset Management (Hong Kong) Company Limited (PICC), for seven months from 20 June 2024 to 19 January 2025 for fund management failures (Note 1).",
  },
  {
    id: 3,
    title:
      "Circular to Licensed Corporations and Associated Entities Revised Business...",
    url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=24PR110",
    date: "Dec 26, 2024",
    content:
      "The Eastern Magistrates' Court today convicted Mr Wong Ming Chung for providing investment advice on a subscription-based chat group on Telegram he hosted without a licence in a prosecution brought by the Securities and Futures Commission (SFC) (Note 1).",
  },
  {
    id: 4,
    title: "SFC bans Lee Kwok Leung for 10 months",
    url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=24PR108",
    date: "Dec 20, 2024",
    content:
      "The Eastern Magistrates' Court today granted the applications made on behalf of the Secretary for Justice to transfer three large scale and sophisticated ramp-and-dump cases to the District Court for trial following joint investigations by the Securities and Futures Commission (SFC) and the Police.",
  },
];

const Articles = () => {
  return (
    <div className="relative py-4 w-full flex-grow group">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".articles-swiper-button-next",
          prevEl: ".articles-swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {articles.map((article) => (
          <SwiperSlide
            key={article.id}
            className="bg-[var(--color-background)] p-6 border-l border-gray-600 min-h-[250px] !h-auto"
          >
            <div className="flex flex-col h-full justify-between">
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <h3 className="text-lg font-semibold text-[var(--color-icon)] hover:opacity-80 mb-3 min-h-[60px]">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-400 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                {article.content}
              </p>
              <div className="mt-auto flex justify-between items-center text-sm">
                <BadgeLabel label="SFC" />
                <span className="text-gray-400">{article.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="articles-swiper-button-prev articles-nav-button left-[-10px]">
        &lt;
      </div>
      <div className="articles-swiper-button-next articles-nav-button right-[-10px]">
        &gt;
      </div>
    </div>
  );
};

export default Articles;
