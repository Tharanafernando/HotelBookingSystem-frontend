import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import DescriptionPage from "./pages/DescriptionPage";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <DescriptionPage/>
      </body>
    </html>
  );
}
