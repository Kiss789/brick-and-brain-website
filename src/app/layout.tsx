import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brick & Brain",
  description: "Ateliers STEM avec LEGO pour écoles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
