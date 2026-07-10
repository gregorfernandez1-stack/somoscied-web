import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somoscied.com"),

  title: {
    default: "CIED | Centro de Innovación Educativa",
    template: "%s | CIED",
  },

  description:
    "Transformando la educación mediante tecnología, innovación y soluciones digitales. CIED integra plataformas como SIGADOM, LectuPlay y TuPlanEFI para impulsar la innovación educativa.",

  keywords: [
    "CIED",
    "Centro de Innovación Educativa",
    "Tecnología educativa",
    "Innovación educativa",
    "SIGADOM",
    "LectuPlay",
    "TuPlanEFI",
    "Gestión académica",
    "Educación",
    "Software educativo",
    "República Dominicana",
  ],

  authors: [
    {
      name: "Centro de Innovación Educativa (CIED)",
      url: "https://somoscied.com",
    },
  ],

  creator: "Centro de Innovación Educativa",
  publisher: "Centro de Innovación Educativa",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
  },

  openGraph: {
    title: "CIED | Centro de Innovación Educativa",

    description:
      "Transformando la educación mediante tecnología, innovación y soluciones digitales.",

    url: "https://somoscied.com",

    siteName: "CIED",

    locale: "es_DO",

    type: "website",

    images: [
      {
        url: "/logo-cied.png",
        width: 1200,
        height: 630,
        alt: "Centro de Innovación Educativa",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
