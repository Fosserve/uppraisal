import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import FooterSection from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uppraisal Consultant | Premier HR & Recruitment Solutions",
  description: "Uppraisal Consultant is a Kolkata-based leading HR Consulting Company catering to startups, SMBs, and Fortune 500 enterprises across India. We provide permanent staffing, executive search, training, payroll & compliance.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} bg-[#fbfaf6] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen flex flex-col`}
      >
        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
