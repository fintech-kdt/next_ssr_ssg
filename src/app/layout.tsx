import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSR, SSG, ISR",
  description: "SSR, SSG, ISR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="container mx-auto">
        <header>
          <nav className="flex space-x-4 px-4 py-2">
            <Link href="/">홈</Link>
            <Link href="/posts">게시물</Link>
            <Link href="/posts2">게시물2</Link>
            <Link href="/users">사용자</Link>
            <Link href="/profile">프로필</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
