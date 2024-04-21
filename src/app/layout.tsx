import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'styles/globals.scss';
import { twMerge } from 'tailwind-merge';
import ThemeRegistry from '@/components/core/ThemeRegistry';

const roboto = Roboto({ weight: ['400', '500', '700'], variable: '--roboto', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MaxCars',
  description: 'MaxCars',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <ThemeRegistry>
        <body className={twMerge(roboto.variable, 'font-primary flex flex-col justify-between min-h-[100dvh]')}>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
