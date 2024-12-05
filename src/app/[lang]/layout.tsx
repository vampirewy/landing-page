import Navbar from "@/components/nav/Navbar";
import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalPath = params.lang === i18n.defaultLocale ? baseUrl : `${baseUrl}/${params.lang}`;

  return {
    title: dict.homePageMetaData.title,
    description: dict.homePageMetaData.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
    },
  };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Navbar lang={params.lang} dict={dict}></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
