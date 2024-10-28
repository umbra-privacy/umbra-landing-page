'use client';
import Spinner from '@/components/Spinner';
import { useSignup } from '@/utils/react-query-hooks';
import { useState } from 'react';

export default function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const signupMutation = useSignup({});

  const handleSignup = () => {
    if (email && name) {
      signupMutation.mutate({ email, name, message });
    }
  };

  return (
    <div className="container pt-6 mx-auto flex flex-wrap flex-col items-center">
      <form className="bg-primary-foreground text-white w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-[900px]">
        <div className="mb-4">
          <label className="block py-2 font-bold mb-2" htmlFor="emailaddress">
            If you get any issue please reachout to us
          </label>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="mb-1 block">Name</span>
                <input
                  className="shadow appearance-none bg-transparent text-white border-secondary/80 border rounded w-full p-3 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <span className="mb-1 block">Email</span>

                <input
                  className="shadow appearance-none bg-transparent text-white border-secondary/80 border rounded w-full p-3 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="emailaddress"
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <span className="mb-1 block">Message</span>

              <textarea
                name=""
                placeholder="Your Message"
                id=""
                cols={10}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={6}
                className="shadow text-white appearance-none bg-transparent border-secondary/80 border rounded w-full p-3  leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end pt-4">
          <button
            className="bg-gradient text-white font-bold py-2 px-8 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out relative"
            type="button"
            onClick={handleSignup}
          >
            Send Message
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
              {signupMutation.isLoading && <Spinner />}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
