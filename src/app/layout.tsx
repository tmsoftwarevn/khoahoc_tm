
import './globals.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Metadata } from "next";
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://tmbook.vn'),
  title: 'TM Book',
  description: 'Nhà sách TM Book',

  openGraph: {
    images: `${process.env.URL_BACKEND}/images/logo.jpg`,
  },
  verification: {
    google: '',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >


        {children}


      </body>
    </html>
  )
}
