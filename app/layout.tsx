import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mert Karakuzu",
  description: "Mert Karakuzu | CyberSecurity Red Team Specialist",
  keywords: [
    "Mert Karakuzu",
    "Cybersecurity",
    "Ethical Hacking",
    "Penetration Testing",
    "CTF",
    "Information Security",
  ],
  authors: [{ name: "Mert Karakuzu", url: "https://karakuzumert.com" }],
  creator: "Mert Karakuzu",
  metadataBase: new URL("https://karakuzumert.com"),
  openGraph: {
    title: "Mert Karakuzu | CyberSecurity",
    url: "https://karakuzumert.com",
    siteName: "Mert Karakuzu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
