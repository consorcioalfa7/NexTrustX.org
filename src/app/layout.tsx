import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexTrustX - Ecossistema Completo de Soluções Digitais",
  description: "Três mundos, uma só plataforma. Finanças, Crypto e Tecnologia conectados para você. Digital, seguro, imediato. O futuro em um só lugar.",
  keywords: ["NexTrustX", "Market", "Exchange", "Crypto", "CC Full", "Gift Cards", "Desenvolvimento", "Ghost-0 Labs", "Finanças", "Tecnologia", "Segurança", "Anonimato"],
  authors: [{ name: "NexTrustX Team" }],
  icons: {
    icon: "https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png",
    apple: "https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png",
  },
  openGraph: {
    title: "NexTrustX - Ecossistema Digital Completo",
    description: "Três mundos, uma só plataforma. Finanças, Crypto e Tecnologia conectados para você. Digital, seguro, imediato.",
    url: "https://nextrustx.org",
    siteName: "NexTrustX",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png",
        width: 1200,
        height: 630,
        alt: "NexTrustX - Ecossistema Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexTrustX - Ecossistema Digital Completo",
    description: "Três mundos, uma só plataforma. Finanças, Crypto e Tecnologia conectados para você.",
    images: ["https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png"],
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#9B4DFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NexTrustX" />
        <meta name="application-name" content="NexTrustX" />
        <meta name="msapplication-TileColor" content="#9B4DFF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
