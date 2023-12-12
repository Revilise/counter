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
import Text from "./components/Text/Text";

function App() {
  const [count, setCount] = React.useState<number>(0);

  const onSum = React.useCallback(
      (val: number) => setCount(val + count),
      [count]
  )

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
              itemProps={{onSum}}
              repeat={3}
          />
          <Text testid="result-string" align="al-central">
              Результат:
              <Text testid="result">
                  {count}
              </Text>
          </Text>
          <Space height="available" />
          <Footer />
      </Layout>
  )
}

export default App;
