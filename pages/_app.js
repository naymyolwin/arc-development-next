import React, { useState } from "react";
import PropTypes from "prop-types";
//import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/Theme";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Font from "../src/Font";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    Font();
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      {/* <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head> */}
      <ThemeProvider theme={Theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        <LazyLoadComponent>
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </LazyLoadComponent>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
