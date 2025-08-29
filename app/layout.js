import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Hawkins Kalambo | Fundraising",
  description: "Support my BSc (Hons) Renewable Energy Systems Engineering at Mzuzu University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-gradient-to-b from-emerald-50 to-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
