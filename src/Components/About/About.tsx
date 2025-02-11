import styles from "./About.module.css";
import full from "./assets/full.png";
import horizontal from "./assets/horizontal.png";
import right from "./assets/right.png";

export default function About() {
  return (
    <div className={styles.main} id="abouts">
      <div className={styles.name}>
        <div className={styles.text}>
          <p>
            <span>#</span>about-me
          </p>
        </div>

        <div className={styles.vector}></div>
      </div>

      <div className={styles.history}>
        <p>Hello, i'm Nurzhan</p>
        <p>
          I’m a self-taught front-end developer based in Astana, Kazakhstan. I
          can develop websites from react and responsive functions.{" "}
        </p>
        <p>
          I started my journey as a developer from school and from the 7th grade
          I actively participated in Math Olympiad and have some achievements.
          In the school year, besides from the math also I had interest in
          competitive programming so solved many problems in Codeforces and
          Leetcode. Since November I have participated in a course from
          nFactorial and learned React and finished in February by getting Gold
          Certificate. I am open to working as a Junior Frontend Developer. And
          by year I am willing to learn Angular and Vue and try myself in
          Backend.
        </p>
        <button
          className={styles.click}
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1shqSj_d2IgVAQl6K7XuOh8hGyTSdOnkC/view?usp=sharing",
            );
          }}
        >
          Read more →
        </button>
      </div>

      <img src={full} alt="full" className={styles.full} />
      <img src={horizontal} alt="horizontal" className={styles.horizontal} />
      <img src={right} alt="right" className={styles.right} />
      <div className={styles.left}></div>
    </div>
  );
}
