'use client';
import { GITHUB_URL } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Support() {
  return (
    <body className="leading-normal tracking-normal text-white bg-cover bg-fixed">
      <div>
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              {/* <Image src="logo.svg" alt="" width={100} height={100} /> */}
              <Image
                src="logo.svg"
                className="transform hover:scale-125 duration-300 ease-in-out"
                alt="Logo"
                width={60}
                height={48}
              />
            </Link>
            <div className="flex w-1/2 justify-end content-center">
              <div className="">
                <a
                  className="inline-block text-secondary no-underline hover:opacity-80 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://www.youtube.com/watch?v=EtYsWHkD7t0"
                  target="_blank"
                >
                  Watch Demo
                </a>
              </div>

              <div className="">
                <a
                  className="inline-block text-secondary no-underline hover:opacity-80 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="/support"
                  target="_blank"
                >
                  Support
                </a>
              </div>

              <div className="">
                <a
                  className="inline-block text-secondary no-underline hover:opacity-80 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  target="_blank"
                  href={GITHUB_URL}
                >
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 23"
                    version="1.1"
                  >
                    <g id="surface1">
                      <path
                        style={{
                          stroke: 'none',
                          fillRule: 'evenodd',
                          fill: 'rgb(100%,100%,100%)',
                          fillOpacity: 1,
                        }}
                        d="M 11.964844 0 C 5.347656 0 0 5.269531 0 11.792969 C 0 17.003906 3.425781 21.417969 8.179688 22.976562 C 8.773438 23.09375 8.992188 22.722656 8.992188 22.410156 C 8.992188 22.136719 8.972656 21.203125 8.972656 20.226562 C 5.644531 20.929688 4.953125 18.820312 4.953125 18.820312 C 4.417969 17.453125 3.625 17.101562 3.625 17.101562 C 2.535156 16.378906 3.703125 16.378906 3.703125 16.378906 C 4.914062 16.457031 5.546875 17.589844 5.546875 17.589844 C 6.617188 19.386719 8.339844 18.878906 9.03125 18.566406 C 9.132812 17.804688 9.449219 17.277344 9.785156 16.984375 C 7.132812 16.710938 4.339844 15.695312 4.339844 11.167969 C 4.339844 9.878906 4.8125 8.824219 5.566406 8.003906 C 5.445312 7.710938 5.03125 6.5 5.683594 4.878906 C 5.683594 4.878906 6.695312 4.566406 8.972656 6.089844 C 9.949219 5.832031 10.953125 5.703125 11.964844 5.699219 C 12.972656 5.699219 14.003906 5.835938 14.957031 6.089844 C 17.234375 4.566406 18.242188 4.878906 18.242188 4.878906 C 18.898438 6.5 18.480469 7.710938 18.363281 8.003906 C 19.136719 8.824219 19.589844 9.878906 19.589844 11.167969 C 19.589844 15.695312 16.796875 16.691406 14.125 16.984375 C 14.558594 17.355469 14.933594 18.058594 14.933594 19.171875 C 14.933594 20.753906 14.914062 22.019531 14.914062 22.410156 C 14.914062 22.722656 15.132812 23.09375 15.726562 22.976562 C 20.480469 21.414062 23.910156 17.003906 23.910156 11.792969 C 23.929688 5.269531 18.558594 0 11.964844 0 Z M 11.964844 0 "
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-6 mx-auto flex flex-wrap flex-col items-center min-h-[calc(100vh-150px)]">
          <div>
            <h1 className="text-secondary text-4xl font-semibold">
              Umbra Wallet Privacy Policy
            </h1>

            <p>Last updated: 20 sept 2024</p>
            <ul className="flex  flex-col divide-secondary divide-y ps-3 py-6">
              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">1. Introduction</h2>
                <p>
                  Umbra Wallet is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your information when you use our browser extension.
                </p>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">
                  2. Information We Collect
                </h2>
                <p>
                  We collect only the information necessary to provide and
                  improve our services:
                </p>

                <ul className="list-disc ps-6">
                  <li>Wallet addresses</li>
                  <li>Transaction data on the Aztec network</li>
                  <li>Usage data to improve our user interface</li>
                </ul>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">
                  3. How We Use Your Information
                </h2>
                <p>We use the collected information to:</p>

                <ul className="list-disc ps-6">
                  <li>
                    Facilitate your interactions with decentralized applications
                    on the Aztec network
                  </li>
                  <li>Improve our wallet functionality and user experience</li>
                  <li>Provide customer support</li>
                </ul>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">
                  4. Data Storage and Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect
                  your information. Your private keys and sensitive data are
                  stored locally on your device and are never transmitted to our
                  servers.
                </p>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">
                  5. Third-Party Services
                </h2>
                <p>
                  Umbra Wallet may interact with third-party decentralized
                  applications. We are not responsible for the privacy practices
                  of these third parties.
                </p>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">
                  6. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
              </li>

              <li className="py-4">
                <h2 className="font-semibold text-2xl mb-2">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:{' '}
                  <a
                    href="mailto:satyamsgsits1994@gmail.com"
                    className="text-secondary underline hover:no-underline"
                  >
                    satyamsgsits1994@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}
