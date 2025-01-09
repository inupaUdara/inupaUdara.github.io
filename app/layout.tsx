import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inupa Udara",
  description: "Discover Inupa Udara's personal projects, skills, and experience in software engineering. Stay connected and learn more.",
  openGraph: {
    description: "Discover Inupa Udara's personal projects, skills, and experience in software engineering. Stay connected and learn more.",
    images: [{url: "https://inupaudara.me/favicon.ico", alt: "Inupa Udara's logo", width: 96, height: 96}],
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
