const NewsDropdown = () => {
  const options = ["SFC", "HKEX", "SFAT", "MMT", "IRA"];

  return (
    <div className="my-4 p-4 w-full md:w-64">
      <h2 className="text-white mb-4">
        <span className="block text-xl font-light">latest</span>
        <span className="block text-3xl font-bold">NEWS</span>
      </h2>

      <div className="relative">
        <select
          id="news-select"
          name="news"
          className="appearance-none w-full bg-transparent border-none pl-0 pr-8 py-2 text-white focus:outline-none text-lg"
          defaultValue="SFC"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[var(--color-background)] text-white"
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NewsDropdown;
