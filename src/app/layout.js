import { Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema } from "./schema";
import WhatsappButton from "@/components/WhatsappButton";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "divtech Studio - Jasa Pembuatan Website Profesional Blora & Semarang",
  description:
    "Jasa pembuatan website profesional untuk UMKM, bisnis, dan instansi di Blora dan Semarang. Landing page, company profile, toko online, dan sistem web custom berbasis Laravel & Next.js.",
  keywords:
    "jasa pembuatan website blora, jasa pembuatan website semarang, jasa website profesional, pembuatan website murah blora, web developer semarang, sistem web custom laravel",
  authors: [{ name: "divtech Studio" }],
  creator: "divtech Studio",
  openGraph: {
    title:
      "divtech Studio - Jasa Pembuatan Website Profesional Blora & Semarang",
    description:
      "Jasa pembuatan website profesional untuk UMKM, bisnis, dan instansi di Blora dan Semarang.",
    url: "https://divtech.studio",
    siteName: "divtech Studio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://divtech.studio",
  },
  icons: {
    icon: "/logo-D.png",
    apple: "/logo-D.png",
  },
  verification: {
    google: [
      "b2YKtaNqLA9cH7-f9afRthElOAuUFGE8w25q_nXq0Ms",
      "9e6jkc8qSBoUCDf_aTmlRZ4ayQSUufvQbeGhvwdjGYg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AOSInit />
        {children}
        <WhatsappButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
