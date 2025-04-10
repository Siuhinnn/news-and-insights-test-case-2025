"use client";

import finnhubClient from "@/lib/finnhubClient";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

interface StockData {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

const stockSymbols = [
  { finnhubSymbol: "TSLA", displayName: "Tesla" },
  { finnhubSymbol: "AAPL", displayName: "Apple" },
  { finnhubSymbol: "GOOG", displayName: "Google" },
  { finnhubSymbol: "MSFT", displayName: "Microsoft" },
  { finnhubSymbol: "AMZN", displayName: "Amazon" },
];

const StockTicker = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      setSelectedSymbol(null);

      try {
        const responses = await Promise.all(
          stockSymbols.map((stock) =>
            finnhubClient.getQuote(stock.finnhubSymbol)
          )
        );

        const formattedData: StockData[] = responses.map((data, index) => {
          const symbolInfo = stockSymbols[index];
          const changePercent = data.dp?.toFixed(2) ?? "0.00";
          const currentPrice = data.c?.toFixed(2) ?? "N/A";
          const isPositive = (data.dp ?? 0) >= 0;

          return {
            symbol: symbolInfo.displayName,
            price: currentPrice,
            change: `${isPositive ? "+" : ""}${changePercent}%`,
            positive: isPositive,
          };
        });

        setStockData(formattedData);
        if (formattedData.length > 0) {
          setSelectedSymbol(formattedData[0].symbol);
        }
      } catch (err) {
        console.error("Error fetching stock data in component:", err);
        if (
          err instanceof Error &&
          err.message === "Finnhub API key is missing."
        ) {
          setError(
            "Finnhub API key is missing. Please configure it in .env.local."
          );
        } else {
          setError("Failed to fetch stock data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  const handleTickerClick = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  return (
    <div className="flex items-center space-x-4 px-4 py-2 font-futura text-sm">
      <div className="relative flex-shrink-0">
        <select className="appearance-none bg-transparent border-none pr-5 text-gray-700 dark:text-gray-300 focus:outline-none">
          <option>Top Securities</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700 dark:text-gray-300">
          <svg
            className="fill-current h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <div className="flex-grow overflow-hidden min-w-0">
        {loading && (
          <span className="block text-center">Loading stock data...</span>
        )}
        {error && (
          <span className="block text-center text-red-600">{error}</span>
        )}
        {!loading && !error && stockData.length > 0 && (
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={10}
            className="!overflow-visible py-1"
          >
            {stockData.map((stock) => {
              const isSelected = stock.symbol === selectedSymbol;
              const baseClasses =
                "transition-transform duration-200 ease-in-out inline-block px-3 py-1 rounded whitespace-nowrap cursor-pointer";
              const selectedStateClasses = isSelected
                ? "bg-gray-100 border border-gray-300 text-gray-800 dark:bg-gray-200 dark:border-gray-400 dark:text-black scale-100"
                : "bg-gray-700 border border-gray-600 text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 scale-95";

              const itemClasses = `${baseClasses} ${selectedStateClasses}`;

              const changeColor = stock.positive
                ? "text-green-500"
                : "text-red-500";

              return (
                <SwiperSlide
                  key={stock.symbol}
                  className="!w-auto"
                  onClick={() => handleTickerClick(stock.symbol)}
                >
                  <span className={itemClasses}>
                    <span>{stock.symbol} |</span> {stock.price}{" "}
                    <span className={changeColor}>{stock.change}</span>
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        {!loading && !error && stockData.length === 0 && (
          <span className="block text-center">No data available.</span>
        )}
      </div>

      <div className="flex space-x-2 flex-shrink-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-lg disabled:opacity-50"
          disabled={loading || !!error}
        >
          &lt;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-lg disabled:opacity-50"
          disabled={loading || !!error}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default StockTicker;
