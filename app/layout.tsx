import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';

// Added font instantiation
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'KUDANS - Koç University Dance Club',
  description: 'Official website of KUDANS - Koç University Dance Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Combined Analytics Scripts */}
        {/* <Script id="analytics-scripts" strategy="afterInteractive">
          {`
            // Google Tag Manager
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3BFQGHM');

            // Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNX32Z1BWE');

            // Hotjar
            (function(c,s,q,u,a,r,e){
              c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
              c._hjSettings={hjid:a};
              r=s.getElementsByTagName('head')[0];
              e=s.createElement('script');
              e.async=true;
              e.src=q+c._hjSettings.hjid+u;
              r.appendChild(e);
            })(window,document,'https://static.hj.contentsquare.net/c/csq-','.js',6391710);
          `}
        </Script> */}
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans min-h-screen flex flex-col bg-black text-white`}>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3BFQGHM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 