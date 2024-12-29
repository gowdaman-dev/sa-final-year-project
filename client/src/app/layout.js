import {Jost} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Banner from "@/components/common/Banner";

export const defaultFont = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnoPedia - Learn and Share",
  description: "LearnoPedia is a platform to learn and share knowledge. students can learn from the best teachers and teachers can share their knowledge with the world.during session students are monitored by a ai to analyze their performance and provide feedback to the teacher.this is done by sentiment analysis , facial exppression recognition and other machine learning algorithms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body
        className={`${defaultFont.className} antialiased`}
      >
        <NavBar/>
        <Banner/>
        {children}
      </body>
    </html>
  );
}
