import type { Metadata } from "next";
import { Google_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IBD Lab | Information Based Design",
  description:
    "Information Based Design Lab - Exploring the intersection of data, design, and technology",
  keywords: ["design", "information", "data visualization", "research", "lab"],
  authors: [{ name: "IBD Lab" }],
  openGraph: {
    title: "IBD Lab | Information Based Design",
    description:
      "Information Based Design Lab - Exploring the intersection of data, design, and technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${googleSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
