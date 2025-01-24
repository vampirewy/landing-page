import Footer from "@/components/footer/Footer";
import { LoadingProvider } from "@/components/loading/loading-context";
import { LoadingInitializer } from "@/components/loading/loading-initializer";
import Navbar from "@/components/nav/Navbar";
import { Locale } from "@/config/i18n";
import { Dictionary } from "@/types/dictionary";
import { generateCommonMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";

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
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages()) as Dictionary;

  return generateCommonMetadata({
    locale,
    title: messages.homePageMetaData.title,
    description: messages.homePageMetaData.description,
  });
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const typedMessages = messages as Dictionary;

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <LoadingProvider>
          <LoadingInitializer />
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navbar lang={locale} dict={typedMessages.navBarComponent} />
            <main>{children}</main>
            <Footer dict={typedMessages.footer} />
          </NextIntlClientProvider>
        </LoadingProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
