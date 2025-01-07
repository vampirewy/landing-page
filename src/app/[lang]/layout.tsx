import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { Dictionary } from "@/types/dictionary";
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

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const dict: Dictionary = await getDictionary(resolvedParams.lang);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalPath = resolvedParams.lang === i18n.defaultLocale ? baseUrl : `${baseUrl}/${resolvedParams.lang}`;

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

export default async function Layout({ children, params }: Props) {
  const resolvedParams = await params;
  const dict: Dictionary = await getDictionary(resolvedParams.lang);

  return (
    <html lang={resolvedParams.lang}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Navbar lang={resolvedParams.lang} dict={dict.navBarComponent}></Navbar>
        <main>{children}</main>
        <Footer lang={resolvedParams.lang} dict={dict.footer} />
      </body>
    </html>
  );
}
