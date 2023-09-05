import './globals.css';
import './styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spigis blog',
  description: 'Blog website by Oliver Tuesta (spigi), content about software, games and books',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-150">
        <Providers>
          <Header />
          <div className="container max-w-screen-lg px-4 py-8">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
