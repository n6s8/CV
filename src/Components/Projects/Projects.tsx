import styles from "./Projects.module.css";
import todolist from "../../assets/todolist.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "./assets/whatsapp.png";

export default function Projects() {
  return (
    <div className={styles.main} id="projects">
      <div className={styles.footer}>
        <div className={styles.name}>
          <div className={styles.text}>
            <p>
              <span>#</span>projects
            </p>
          </div>

          <div className={styles.vector}></div>
        </div>

        <div
          className={styles.more}
          onClick={() => {
            window.open("https://github.com/n6s8");
          }}
        >
          <p className={styles.moretext}>View all ~~&gt;</p>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item1}>
          <img src={todolist} alt="todolist" className={styles.img1} />

          <div className={styles.tools}>HTML CSS JS TS REACT</div>

          <div className={styles.description}>
            <h1>ToDoList</h1>
            <p>Application for daily tasks</p>
            <div
              className={styles.live}
              onClick={() => {
                window.open("https://to-do-list-seven-chi-42.vercel.app/");
              }}
            >
              <p>Live {"\u003C~\u003E"}</p>
            </div>
          </div>
        </div>

        <div className={styles.item1}>
          <img src={twitter} alt="twitter" className={styles.img1} />

          <div className={styles.tools}>HTML CSS JS TS REACT</div>

          <div className={styles.description}>
            <h1>Twitter</h1>
            <p>Clone of Twitter</p>
            <div
              className={styles.live}
              onClick={() => {
                window.open("https://twitter-indol-rho.vercel.app/");
              }}
            >
              <p>Live {"\u003C~\u003E"}</p>
            </div>
          </div>
        </div>

        <div className={styles.item1}>
          <img src={whatsapp} alt="whatsapp" className={styles.img1} />

          <div className={styles.tools}>HTML CSS JS TS REACT</div>

          <div className={styles.description}>
            <h1>Whatsapp</h1>
            <p>Clone of Whatsapp</p>
            <div
              className={styles.live}
              onClick={() => {
                window.open("https://whatsapp-ruddy-nine.vercel.app/");
              }}
            >
              <p>Live {"\u003C~\u003E"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.corner}></div>
    </div>
  );
}
