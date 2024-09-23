'use client';
import Spinner from '@/components/Spinner';
import { GITHUB_URL } from '@/constants';
import { useSignup } from '@/utils/react-query-hooks';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Component() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const signupMutation = useSignup({});

  const handleSignup = () => {
    if (email && name) {
      signupMutation.mutate({ email, name, message: '' });
    }
  };

  const carousalImages = [
    {
      id: 1,
      title: 'landing',
      path: '/screenshots/ss1.png',
    },
    {
      id: 2,
      title: 'game',
      path: '/screenshots/ss2.png',
    },
    {
      id: 3,
      title: 'rules',
      path: '/screenshots/ss3.png',
    },
    {
      id: 4,
      title: 'settings',
      path: '/screenshots/ss4.png',
    },
    {
      id: 5,
      title: 'settings',
      path: '/screenshots/ss5.png',
    },
    {
      id: 6,
      title: 'settings',
      path: '/screenshots/ss6.png',
    },
    {
      id: 7,
      title: 'settings',
      path: '/screenshots/ss7.png',
    },
    {
      id: 8,
      title: 'settings',
      path: '/screenshots/ss8.png',
    },
    {
      id: 9,
      title: 'settings',
      path: '/screenshots/ss9.png',
    },
    {
      id: 10,
      title: 'settings',
      path: '/screenshots/ss10.png',
    },
    {
      id: 11,
      title: 'settings',
      path: '/screenshots/ss11.png',
    },
  ];

  return (
    <body className="leading-normal tracking-normal text-white bg-cover bg-fixed">
      <div>
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <button>
              {/* <Image src="logo.svg" alt="" width={100} height={100} /> */}
              <Image
                src="logo.svg"
                className="transform hover:scale-125 duration-300 ease-in-out"
                alt="Logo"
                width={60}
                height={48}
              />
            </button>
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

        <div className="container pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="grid grid-cols-12">
            <div className="flex flex-col justify-center lg:items-start overflow-y-hidden col-span-7">
              <h1 className="my-4 text-3xl md:text-5xl text-secondary opacity-75 font-bold leading-tight text-center md:text-left">
                Umbra Wallet{' '}
                <span className="">
                  is a Web3 Privacy Focused{' '}
                  <span className="text-gradient">wallet.</span>
                </span>
              </h1>
              <p className="leading-normal text-base md:text-xl mb-8 text-center md:text-left">
                Umbra is at the frontier, leading the way in innovation and
                user-centric design. We're not just building a wallet; we're
                crafting the cornerstone of zero-knowledge application
                interaction design. With Umbra, you're stepping into the future
                of privacy-focused blockchain interactions.
              </p>

              <form className="bg-primary-foreground text-white w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-[500px]">
                <div className="mb-4">
                  <label
                    className="block py-2 font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    signup to keep receiving updates
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out mt-4"
                    id="emailaddress"
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    className="bg-gradient text-white font-bold py-2 px-8 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out relative"
                    type="button"
                    onClick={handleSignup}
                  >
                    signup to keep receiving updates
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      {signupMutation.isLoading && <Spinner />}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full p-12 overflow-hidden col-span-5 text-secondary">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {carousalImages.map(({ id, title, path }) => {
                    return (
                      <CarouselItem className="py-6" key={id}>
                        <Image
                          src={path}
                          alt={title}
                          className="rounded-xl rotate-[4deg] hover:rotate-12 transition-all h-[600px] object-cover mx-auto"
                          width={360}
                          height={620}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
