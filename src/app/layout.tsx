import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSerifDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/DMSerifDisplay/DMSerifDisplay-Regular.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSerifDisplay/DMSerifDisplay-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dm-serif-display",
  display: "swap",
  fallback: ["sans-serif"],
});

const futuraBt = localFont({
  src: [
    { path: "../../public/fonts/FuturaBT/FUTURAL.ttf", weight: "300" },
    { path: "../../public/fonts/FuturaBT/futura-book-bt.ttf", weight: "400" },
    { path: "../../public/fonts/FuturaBT/FUTURAM.ttf", weight: "500" },
    { path: "../../public/fonts/FuturaBT/FUTURAB.ttf", weight: "700" },
  ],
  variable: "--font-futura-bt",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "News & Insights",
  description: "For Test Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${dmSerifDisplay.variable} ${futuraBt.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
