import styles from "./Footer.module.css";
import logo from "../../assets/Logo.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/LinkedIn.png";
import youtube from "../../assets/YouTube.png";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.start}>
          <div className={styles.text}>
            <p>
              <img src={logo} alt="logo" className={styles.logo} /> Nurzhan{" "}
              <span>nurzhan-sultanov</span>
            </p>

            <p>Front-end developer and Math Olympiad Coach</p>
          </div>

          <div className={styles.media}>
            <p>Media</p>
            <div className={styles.logos}>
              <img
                src={github}
                alt="github"
                onClick={() => {
                  window.open("https://github.com/n6s8/");
                }}
              />
              <img
                src={linkedin}
                alt="linkedin"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/nurzhan-sultanov/");
                }}
              />
              <img
                src={youtube}
                alt="youtube"
                onClick={() => {
                  window.open("https://www.youtube.com/@Neponator");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
