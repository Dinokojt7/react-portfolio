import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiisetso Dinoko | Software Engineer, Frontend & Mobile Developer",
  description:
    "Portfolio website of Tiisetso Dinoko - Software Engineer, Frontend & Mobile Developer specializing in Next.js, React, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen ">{children}</div>
      </body>
    </html>
  );
}
