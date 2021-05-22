import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';
import Link from "next/link";

const Home = (props) => {
  const { articles } = props;
  return (
    <div className={styles._wrapper}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul>
          {
            articles.map(item => {
              return (
                <li>
                  <Link href={`/`}>{item.title}</Link>
                </li>
              );
            })
          }
        </ul>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  // const res = await fetch('https://.../posts')
 //  const posts = await res.json()
  const articles = [
    {
      id: 1,
      title: "文章标题",
      desc: "这是个文章表描述。。咋啊啊啊",
      author: "刘磊",
    },
    {
      id: 2,
      title: "文章标题",
      desc: "这是个文章表描述。。咋啊啊啊",
      author: "刘磊",
    },
    {
      id: 3,
      title: "文章标题",
      desc: "这是个文章表描述。。咋啊啊啊",
      author: "刘磊",
    },
    {
      id: 4,
      title: "文章标题",
      desc: "这是个文章表描述。。咋啊啊啊",
      author: "刘磊",
    }
  ];
  const tags = [
    {
      title: 'title1'
    }
  ]

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      articles,
      tags
    },
  }
}

export default Layout(Home);
