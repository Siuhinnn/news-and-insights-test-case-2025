import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const linkedInUrl =
    "https://www.linkedin.com/company/timothy-loh-solicitors/";

  return (
    <header
      className={`h-24 sticky top-0 z-50 bg-[var(--color-background)] text-[var(--color-icon)] p-3 flex justify-between items-center w-full`}
    >
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="/images/aay.png"
            alt="Menu"
            width={20}
            height={20}
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <span className="text-sm">Menu</span>
        </button>
        <button className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image src="/images/aav.png" alt="Search" width={20} height={20} />
          <span className="text-sm">Search</span>
        </button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/aba.png"
          alt="Timothy Loh LLP Logo"
          width={300}
          height={60}
          className="object-contain"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-1 hover:opacity-80 cursor-pointer">
          <Image src="/images/abb.png" alt="Translate" width={24} height={24} />
        </button>
        <Link
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 hover:opacity-80"
        >
          <Image src="/images/abc.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
