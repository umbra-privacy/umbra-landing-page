import Image from 'next/image';
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
          className="fade-in"
        >
          <Image
            src="chrome.extStore.svg"
            className="h-12 transform hover:scale-125 duration-300 ease-in-out"
            alt="app store"
            width={190}
            height={48}
          />
        </Link>
      </div>

      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-gray-500 no-underline hover:no-underline" href="#">
          &copy; Umbra Wallet 2024
        </a>
      </div>
    </footer>
  );
};

export default Footer;
