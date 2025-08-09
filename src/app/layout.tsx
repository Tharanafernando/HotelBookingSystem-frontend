import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <PaymentPage/>
      </body>
    </html>
  );
}
