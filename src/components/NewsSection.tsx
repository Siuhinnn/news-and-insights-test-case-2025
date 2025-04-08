import Articles from "./Articles";
import NewsDropdown from "./NewsDropdown";

const NewsSection = () => {
  return (
    <section className="w-full bg-header-bg text-icon-gold p-8 md:p-12 flex flex-col md:flex-row bg-[var(--color-background)]">
      <div className="flex-shrink-0 w-full md:w-auto md:pr-8 lg:pr-12 mb-8 md:mb-0">
        <NewsDropdown />
      </div>
      <div className="flex-grow min-w-0">
        <Articles />
      </div>
    </section>
  );
};

export default NewsSection;
