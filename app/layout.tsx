import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
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

// import Container from "@/components/global/Container";
// import Providers from "./providers";
// import "./globals.css";
// import { ToastContainer } from "react-toastify";
// import Footer from "@/components/footer/Footer";
// import AuthProvider from "./auth-provider";
// import Navbar from "@/components/navbar/Navbar";
// 
// //Remove-Item -Recurse -Force .next
// 
// // le probleme est au niveau de la navbar 
// 
// // app/layout.tsx
// export const metadata = {
//   title: "QLab",
//   description: "Qavaa Innovate Lab",
// };
// 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//           <Providers>
//             {/* <Navbar /> */}
//             <Container className="py-20">{children}</Container>
//             <ToastContainer position="top-right" autoClose={3000} />
//             <Footer />
//           </Providers>
//         </AuthProvider>
// 
//         {/* {children} */}
//       </body>
//     </html>
//   );
// }
