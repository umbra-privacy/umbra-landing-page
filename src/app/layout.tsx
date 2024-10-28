import { ClientLayout } from './ClientLayout';
import { Inter, Roboto_Mono, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Umbra Wallet',
    template: '%s | Umbra Wallet',
  },
  description: 'Wallet for Aztec Network',
  keywords: ['Web3', 'Wallet', 'Aztec', 'Blockchain', 'DeFi', 'Privacy'],
  authors: [{ name: 'Satyam Bansal' }],
  creator: 'Satyam Bansal',
  publisher: 'Satyam Bansal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://umbra-landing-page.vercel.app/',
    siteName: 'Umbra Wallet',
    title: 'Umbra Wallet - Web3 Lifestyle Application',
    description: 'Web3 lifestyle application on Starknet',
    images: [
      {
        url: '/screenshots/ss1.png',
        width: 372,
        height: 603,
        alt: 'Umbra Wallet Preview',
      },
    ],
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  category: 'Web3 Technology',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${roboto_mono.variable}`}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
