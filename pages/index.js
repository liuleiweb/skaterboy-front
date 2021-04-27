import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';
import Link from "next/link";

const Home = (props) => {
  return (
    <div className={styles._wrapper}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul>
          <li>
            <Link href={`/`}>文章</Link>
          </li>
          <li>
            <Link href={`/about`}>关于</Link>
          </li>
        </ul>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Layout(Home);
