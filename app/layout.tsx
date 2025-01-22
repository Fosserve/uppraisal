import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import clsx from 'clsx'
import '../styles/tailwind.css'


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Uppraisal",
  description: "Share your creations with the world",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('antialiased', poppins.variable)}>
      <body>{children}</body>
    </html>
  )
}

