import Union from "../../assets/Union.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <img src={Union} alt="Union" className={styles.union} />
        <h1 className={styles.name}>Nurzhan</h1>
      </div>

      <div>
        <nav className={styles.navbar}>
          <a className={styles.items} href="#homepage">
            <p className={styles.symbol}>#</p>
            <span className={styles.text}>home</span>
          </a>
          <a className={styles.items} href="#projects">
            <p className={styles.symbol}>#</p>
            <span className={styles.text}>works</span>
          </a>
          <a className={styles.items} href="#abouts">
            <p className={styles.symbol}>#</p>
            <span className={styles.text}>about-me</span>
          </a>
          <a className={styles.items} href="#contacts">
            <p className={styles.symbol}>#</p>
            <span className={styles.text}>contacts</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
