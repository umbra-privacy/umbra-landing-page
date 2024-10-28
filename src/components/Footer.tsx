import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto md:pt-10 flex flex-col items-center justify-center">
        <p className="text-secondary font-bold pb-8 lg:pb-6 text-center">
          Download our extension:
        </p>
        <Link
          href="https://github.com/satyambnsal/umbra/releases/tag/0.011"
          target="_blank"
          className="fade-in text-secondary underline hover:no-underline"
        >
          Github Releases
        </Link>
      </div>

      <div className="w-full pt-16 pb-6 text-sm md:text-left fade-in text-center flex items-center justify-center">
        <a
          className="text-gray-500 no-underline hover:no-underline text-center"
          href="#"
        >
          &copy; Umbra Wallet 2024
        </a>
      </div>
    </footer>
  );
};

export default Footer;
