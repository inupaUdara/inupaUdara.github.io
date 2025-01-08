import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inupa Udara",
  openGraph: {
    description: "Discover Inupa Udara's personal projects, skills, and experience in software engineering. Stay connected and learn more.",
    images: ["https://inupaudara.me/favicon.ico"],
  },
  metadataBase: new URL("https://inupaudara.me"),
  keywords: ["Inupa Udara", "Software Engineer", "Portfolio", "Projects", "Skills"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
