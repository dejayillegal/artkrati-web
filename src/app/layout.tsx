import type { Metadata } from 'next';
import './globals.css';
import '@/styles/motion.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { brotherHome } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Aakrati Interior Design Artist',
  description:
    'Aakrati Interior Design Artist - We design and execute complete Luxury Interiors and Exteriors as per your taste and budget.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark scroll-smooth', brotherHome.variable)}>
      <body className={cn('grain min-h-screen bg-background font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
