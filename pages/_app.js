import "@/styles/globals.css";
import Header from "@/src/components/Header";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import Head from "next/head";
import Script from "next/script";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "@/src/components/Footer";
import { useRouter } from "next/router"; // ✅ Import useRouter

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isMobileLeadPage =
    router.pathname === "/mobile-lead" || router.pathname === "/userAgreement"; // ✅ Check the path

  return (
    <>
      <Head>
        <title>
          AI-Based Sensor & Data Monitoring - USA & Canada | Inovisense
        </title>
        <meta
          name="description"
          content="AI-based sensor and data monitoring solutions across USA & Canada. Explore how Inovisense uses Sensor DATA + AI for Predictive Intelligence."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="AI-Based Sensor & Data Monitoring - USA & Canada | Inovisense"
        />
        <meta
          property="og:description"
          content="AI-based sensor and data monitoring solutions across USA & Canada. Explore how Inovisense uses Sensor DATA + AI for Predictive Intelligence."
        />
        <meta
          name="google-site-verification"
          content="yupH8MKTFE0QqpNZgilWQqRWcU5wBqZEmlLPkiRDenE"
        />
        <meta property="og:image" content="https://inovisense.com/image.png" />
        <meta property="og:url" content="https://inovisense.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Inovisense" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI-Based Sensor & Data Monitoring - USA & Canada | Inovisense"
        />
        <meta
          name="twitter:description"
          content="AI-based sensor and data monitoring solutions across USA & Canada."
        />
        <meta name="twitter:image" content="https://inovisense.com/image.png" />
      </Head>

      <Script
        id="google-gtag"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16873588857"
        strategy="afterInteractive"
      />
      <Script id="google-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16873588857');
        `}
      </Script>

      {!isMobileLeadPage && <Header />}
      <Component {...pageProps} />
      {!isMobileLeadPage && <Footer />}

      {!isMobileLeadPage && (
        <div className="hidden md:block">
          <ScrollToTopButton />
        </div>
      )}
      {!isMobileLeadPage && (
        <a
          href="tel:+18483130582"
          className="fixed bottom-4 right-4 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg md:hidden flex items-center justify-center"
        >
          <FaPhoneAlt className="text-xl" />
        </a>
      )}
    </>
  );
}
