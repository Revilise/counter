import React from 'react';

// /* <-- fonts --> */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// /* <---------------> */

import Layout from "./components/Layout/Layout";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Repeat from "./components/Repeat/Repeat";
import Footer from "./components/Footer/Footer";
import Space from "./components/Space/Space";

function App() {
  return (
      <Layout
          orientation="vertical"
          desktopMaxWidth="w-960"
          space="sp-16"
          height="screen-height"
      >
          <Header />
          <Repeat
              container={Layout}
              containerProps={{
                  orientation: "horizontal",
                  space: "sp-16"
              }}
              item={Card}
              repeat={3}
          />
          <Space height="available" />
          <Footer />
      </Layout>
  )
}

export default App;
