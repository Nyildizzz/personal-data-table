import { Montserrat } from "next/font/google";
import "./globals.css";

// Define Montserrat font with a font size of 600
const montserrat = Montserrat({ subsets: ["latin"], variations: ["600"] });

export const metadata = {
  title: "Personal Dashboard",
  description: "A personal dashboard for tracking your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
