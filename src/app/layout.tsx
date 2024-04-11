
import { Toaster } from "sonner";
import { Inter } from 'next/font/google';
import type { Metadata} from 'next';
import ConvexClientProvider from "../components/providers/ConvexClientProvider";
import './globals.css'
import {Header} from "./Header";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flocentra',
  description: 'The connected workspace where better, faster work happens.',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
         <ConvexClientProvider>
          <Header/>
          {children}</ConvexClientProvider>
      </body>
    </html>
  );
}