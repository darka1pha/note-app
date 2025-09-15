import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ServiceWorker from '@/providers/serviceWorker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Notiva - Note Taking App',
  applicationName: 'Notiva',
  description: 'An open source note taking app',
  appleWebApp: {
    capable: true,
    title: 'Notiva - Note Taking App',
    statusBarStyle: 'default',
    startupImage: {
      url: '/assets/manifest-icons/apple-touch-icon.png',
      media:
        '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ServiceWorker>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ServiceWorker>
    </html>
  );
}
