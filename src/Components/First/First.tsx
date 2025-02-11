import styles from "./First.module.css";
import Outline from "../../assets/Outline.png";
import Personal from "../../assets/Personal.jpg";

export default function First() {
  return (
    <div className={styles.main} id="homepage">
      <div className={styles.content}>
        <h1 className={styles.detail}>
          <span className={styles.white}>
            {" "}
            Nurzhan is a passionate educator{" "}
          </span>{" "}
          <span className={styles.purple}>
            {" "}
            and aspiring frontend developer, dedicated to creating{" "}
          </span>{" "}
          <span className={styles.white}>
            {" "}
            engaging web applications and sharing knowledge in computer science
            and mathematics.
          </span>
        </h1>
        <p className={styles.detail1}>
          I empower others by sharing free lessons on programming, math, and
          chemistry, blending creativity with technical precision
        </p>

        <a className={styles.btn} href="#contacts">
          Contact me
        </a>
      </div>

      <div className={styles.Last}>
        <div className={styles.ImgBlock}>
          <img src={Outline} alt="Outline" className={styles.outline} />
          <img src={Personal} alt="Persona" className={styles.MainImg} />
        </div>

        <div className={styles.current}>
          <button className={styles.BtnPurple}></button>{" "}
          <p className={styles.grey}>
            Currently searching for <span className={styles.white}>Job</span>
          </p>
        </div>
      </div>
    </div>
  );
}
