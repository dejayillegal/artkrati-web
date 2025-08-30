import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { brotherHome } from '@/lib/fonts';


export const metadata: Metadata = {
  title: 'Aakrati Interior Design Artist',
  description: 'Aakrati Interior Design Artist - We design and execute complete Luxury Interiors and Exteriors as per your taste and budget.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <html
      lang="en"
      className={cn('dark scroll-smooth', isProd && 'prod', brotherHome.variable)}
    >
      <body
        className={cn(
          'min-h-screen bg-background font-body font-sans antialiased'
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
