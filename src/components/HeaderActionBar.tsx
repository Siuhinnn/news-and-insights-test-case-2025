import AuthSection from "./AuthSection";
import StockTicker from "./StockTicker";

const HeaderActionBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 flex flex-col md:flex-row justify-between items-center w-full px-4 min-h-[60px]">
      <div className="flex-grow w-full md:w-auto">
        <StockTicker />
      </div>
      <div className="flex-shrink-0 w-full md:w-auto py-2 md:py-0">
        <AuthSection />
      </div>
    </div>
  );
};

export default HeaderActionBar;
