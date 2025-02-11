import styles from "./Quote.module.css";
import Symbol from "../../assets/Symbol.png";

export default function Quote() {
  return (
    <div className={styles.main}>
      <div className={styles.blog}>
        <div className={styles.context}>
          <p>The only way to do great work is to love what you do</p>
        </div>

        <div className={styles.author}>
          <p>Steve Jobs</p>
        </div>

        <div className={styles.img1}>
          <img src={Symbol} alt="Symbol" className={styles.symbol} />
        </div>

        <div className={styles.img2}>
          <img src={Symbol} alt="Symbol" className={styles.symbol} />
        </div>
      </div>

      <div className={styles.box}></div>
    </div>
  );
}
