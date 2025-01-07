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
    images: ['https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/my.jpg?alt=media&token=327b7d10-900d-40a0-8490-9710de0cbd2a']
  },
  metadataBase: new URL("https://inupaudara.me"),
  keywords: ["Inupa Udara", "Inupa", "Udara", "Personal Website", "inupa", "udara", "inupa udara", "inupa-udara", "portfolio", "projects", "skills", "experience", "education", "about", "contact"],
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
