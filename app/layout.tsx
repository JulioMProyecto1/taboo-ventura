import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Cinzel_Decorative } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cinzelDecorative.className}
      >
        <header className="bg-red-900 text-pink-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">TabooVentura</h1>
            <p className="mt-2 text-xl">
              Dare to Experience the Unconventional
            </p>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
