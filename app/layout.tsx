import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./auth-provider";

const inter = Montserrat({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "QLab",
  description: "Qavaa Innovate Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
