import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Такси Шоколад",
  description: "Аренда автомобилей для работы в такси",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} p-3 lg:px-24 lg:py-12 bg-neutral-200/60`}>
        <Header />
        <main className="my-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
