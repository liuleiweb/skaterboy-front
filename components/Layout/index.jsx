import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { ConfigProvider } from '../ConfigProvider'
import config from '../../global.config.json'
import Transition from "../transition";

const Layout = (Component) => {
  const initialConfig = {
    theme: 'light',
    ...config
  }

  return props => (
    <ConfigProvider value={initialConfig}>
      <Header />
      <main>
        <Transition>
          <Component {...props} />
        </Transition>
      </main>
      <Footer />
    </ConfigProvider>
  );
}
export default Layout;