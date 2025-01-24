import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google"
import Header from "./components/header";
import FooterSection from "./components/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Uppraisal consultant",
  description: "Uppraisal Consultant is a Kolkata based Consulting Company catering to small, medium, and large sized businesses across India. At Uppraisal, we focus on addressing specific employee related needs of our clients, based on our dynamic strategies and expertise. We are a one-stop solution for all your HR needs",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} bg-white  antialiased`}
      >
        <div>
          <Header />
          <main>{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
