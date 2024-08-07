import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fabric World",
  description: "Fabric World is your one-stop destination for premium quality fabrics, offering a wide variety of textiles for all your fashion and home decor needs. Discover the perfect blend of comfort, style, and durability with our extensive collection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
