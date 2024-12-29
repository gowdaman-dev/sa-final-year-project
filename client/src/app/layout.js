import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Banner from "@/components/common/Banner";
import { keyWords } from "./metadata";

export const defaultFont = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnoPedia: Revolutionizing Education with AI-Driven Learning",
  description:
    "LearnoPedia is a cutting-edge platform where students learn from top educators and teachers share their expertise worldwide. AI-powered sentiment analysis and facial expression recognition ensure enhanced learning experiences and personalized feedback for both students and educators.",
  keywords: keyWords,
  author: "LearnoPedia Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="google-site-verification" content="Xvv4D0BqdFd8zWaR7XdzPiQRt9AKk_6rKdo1E__tBF8" />
      </head>
      <body className={`${defaultFont.className} antialiased`}>
        <NavBar />
        <Banner />
        <div className="xl:w-11/12 lg:px-[3rem] px-4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
