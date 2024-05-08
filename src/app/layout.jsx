import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/ThemeProvider";
import clsx from "clsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Agenda",
  description: "Gestionaire d'Agenda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background pb-16 overflow-hidden")}>
        <ToastContainer />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full flex-col ">
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
