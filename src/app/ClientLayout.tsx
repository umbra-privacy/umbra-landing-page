'use client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';

const queryClient = new QueryClient();
// This layout component can be used with React state, context and more as it is a client component.

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
      </QueryClientProvider>
      <Toaster />
    </>
  );
};
