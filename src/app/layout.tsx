import "./_reset.scss";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 연구소",
  description: "next13 이것저것 해보기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
