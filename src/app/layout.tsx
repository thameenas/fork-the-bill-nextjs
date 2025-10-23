import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fork the Bill - Split Bills Easily",
  description: "Easily split restaurant bills with friends!",
  keywords: "bill splitting, expense sharing, receipt scanner, split bill, restaurant bill",
  authors: [{ name: "Fork the Bill" }],
  openGraph: {
    type: "website",
    title: "Fork the Bill - Split Bills Easily",
    description: "Easily split restaurant bills with friends!",
    images: [],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="" />
        <meta property="og:image:url" content="" />
        <meta property="og:image:secure_url" content="" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
