import type { Metadata } from 'next';
import { Inter, Kurale, Nova_Square } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
// const inter = Inter({ subsets: ['latin'] });
const inter = Nova_Square({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'HomeAway Draft',
  description: 'Feel at home, away from home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
