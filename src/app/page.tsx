/* eslint-disable prettier/prettier */
'use client';
import Spinner from '@/components/Spinner';
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
            crafting the cornerstone of zero-knowledge application interaction
            design. With Umbra, you're stepping into the future of
            privacy-focused blockchain interactions.
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
  );
}
