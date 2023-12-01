
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Jost } from "next/font/google";

import Header from "@/components/Header/Header";

import Footer from "@/components/footer/Footer";
import Promotion from "@/components/promotion/promotion";
import ReactQueryProvider from "@/utils/reactQueryProvider";
import SplashScreen from "./SplashScreen";

import NextAuthProvider from "@/utils/nextProvider";



const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kreomart",
  description: "One stop for all your need. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >

      <body className={jost.className} >
        <NextAuthProvider>
        <ReactQueryProvider >
        <SplashScreen /> 
        <Header />
        <Promotion />
        <main>{children}</main>
        <Toaster />
        <Footer />
        </ReactQueryProvider>
        </NextAuthProvider>
      </body>

     
      
   
    </html>
  );
}
