import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { ConfigProvider } from '../ConfigProvider'
import config from '../../global.config.json'
import Transition from "../transition";
import styles from '../../styles/Home.module.css';

const Layout = (Component) => {
  const initialConfig = {
    theme: 'light',
    ...config
  }

  return props => (
    <ConfigProvider value={initialConfig}>
      <Header tags={props.tags} />
      <main className={styles._wrapper} style={{paddingTop: 20}}>
        <Transition>
          <Component {...props} />
        </Transition>
      </main>
      <Footer />
    </ConfigProvider>
  );
}
export default Layout;