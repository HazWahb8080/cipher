import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./cipher/page";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <HomePage {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
