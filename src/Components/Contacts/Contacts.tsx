import styles from "./Contacts.module.css";
import discord from "../../assets/discord.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import youtube from "../../assets/youtube.png";
import telegram from "../../assets/telegram.png";

export default function Contacts() {
  return (
    <div className={styles.main} id="contacts">
      <div className={styles.name}>
        <div className={styles.text}>
          <p>
            <span>#</span>contacts
          </p>
        </div>

        <div className={styles.vector}></div>
      </div>

      <div className={styles.sugg}>
        I’m interested in freelance opportunities. However, if you have other
        request or question, don’t hesitate to contact me
      </div>

      <div className={styles.blog}>
        <h1>Message me here</h1>
        <div className={styles.contacts}>
          <div className={styles.item}>
            <img src={discord} alt="discord" />
            <p>s8n6a6</p>
          </div>

          <div className={styles.item}>
            <img src={linkedin} alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/nurzhan-sultanov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>

          <div className={styles.item}>
            <img src={youtube} alt="youtube" />
            <a
              href="https://www.youtube.com/@Neponator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neponator
            </a>
          </div>

          <div className={styles.item}>
            <img src={github} alt="github" />
            <a
              href="https://github.com/n6s8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              n6s8
            </a>
          </div>

          <div className={styles.item}>
            <img src={telegram} alt="telegram" />
            <p>+77064200516</p>
          </div>
        </div>
      </div>
    </div>
  );
}
