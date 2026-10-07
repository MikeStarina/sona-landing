import type { Metadata } from "next";
import { Header } from "@/src/widgets";
import "normalize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sona | Voice OS",
  description: "Sona is a voice-based operating system that allows you to control your computer with your voice.",
  appleWebApp: {
    title: "Sona",
    capable: false,
  },
  openGraph: {
    title: "Sona | Voice OS",
    description: "Sona is a voice-based operating system that allows you to control your computer with your voice.",
    siteName: "Sona",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 696,
        height: 392,
        alt: "Your personal voice agent for macOS",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
