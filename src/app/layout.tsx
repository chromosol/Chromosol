import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
//import { Analytics } from "@/components/Analytics";
//import { Toaster } from "@/components/ui/toaster";

// Load font with display option for better performance
const font = DM_Sans({ 
  subsets: ["latin"],
  display: 'swap', 
});

export const metadata = {
  title: {
    default: 'Company Name',
    template: '%s | Company Name',
  },
  description: 'Company description goes here',
  keywords: ['company', 'nextjs', 'react'],
  authors: [{ name: 'Company Name' }],
  creator: 'Company Name',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Company Name',
    title: 'Company Name',
    description: 'Company description goes here',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Company Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Name',
    description: 'Company description goes here',
    images: ['/twitter-image.jpg'],
    creator: '@companyhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Aoscompo>
          <ScrollToTop />
          {/* <Toaster />
          <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}