import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from "../../components1/Provider";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santipur Science Club",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark relative">
      <body className={inter.className}><AuthProvider>{children}</AuthProvider>
      <Toaster />
      </body>
      <Link href="/library_">
      <button className="fixed bottom-4 right-8 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl m-2 p-2 rounded-lg w-32">Visit our library</button>
      </Link>
    </html>
  );
}
