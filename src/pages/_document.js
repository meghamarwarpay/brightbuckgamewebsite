import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import the Script component

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/svg+xml/png" href="/logo.png" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </Html>
  );
}
