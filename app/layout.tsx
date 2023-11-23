import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculator App",
  description: "The same as an ordinary calculator",
  metadataBase: new URL("https://calc-f.vercel.app/"),
  openGraph: {
    title: "Calculator App",
    siteName: "Calculator App",
    description: "Just use this convenient calculator",
    type: "website",
    url: "https://calc-f.vercel.app/",
    locale: "en_US",
    images: [
      {
        url: "images/ogp-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculator image",
      },
      {
        url: "images/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "Calculator image",
      },
    ],
  },
  twitter: {
    title: "Calculator App",
    card: "summary_large_image",
    images: [
      {
        url: "images/ogp-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculator image",
      },
      {
        url: "images/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "Calculator image",
      },
    ],
    description: "Just use this convenient calculator",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
