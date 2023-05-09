import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "./components/Header";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "H Movies",
  description: "Movies from Netflix using RapidAPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* page.js files etc  */}
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
