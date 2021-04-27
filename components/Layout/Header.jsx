import styles from '../../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles._header}>
      <div className={styles._header_wrapper}>
        <h3 className={styles.title}>世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活</h3>
      </div>
    </header>
  );
}
export default Header;