import type { Metadata } from "next";
import { Geist_Mono, Nunito, Signika } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodies — Restaurant & Fast Food",
  description: "Foodies clone scaffold (wowtheme7.com/tf/foodies) — swap content/images before deploying",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${signika.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-foodies-body text-foodies-text font-sans">{children}</body>
    </html>
  );
}
