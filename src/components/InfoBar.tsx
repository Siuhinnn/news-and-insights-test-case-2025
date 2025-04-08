import Image from "next/image";
import Link from "next/link";

const InfoBar = () => {
  const linkedInUrl =
    "https://www.linkedin.com/company/timothy-loh-solicitors/";

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-icon)] p-8 flex justify-between items-center w-full text-sm mb-8">
      <div className="flex-grow text-center md:text-left px-4">
        <span>
          STAY INFORMED ON THE MOST PRESSING LEGAL AND REGULATORY NEWS
        </span>
      </div>

      <div className="flex-shrink-0">
        <Link
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:opacity-80"
        >
          <Image src="/images/abc.png" alt="LinkedIn" width={24} height={24} />
          <span>Follow us on LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
