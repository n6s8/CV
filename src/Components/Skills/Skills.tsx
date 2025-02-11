import styles from "./Skills.module.css"
import Outline from "../../assets/Outline.png"
import Dots from "../../assets/Dots.png"

export default function Skills() {
    return (
        <div className={styles.main}>
            <div className={styles.name}>
                <div className={styles.text}>
                    <p><span>#</span>skills</p>
                </div>

                <div className={styles.vector}>

                </div>
            </div>

            <div className={styles.blogs}>
                <div className={styles.big}></div>
                <div className={styles.small}></div>
                <img src={Outline} alt="Outline" className={styles.outline}/>
                <img src={Dots} alt="Dots" className={styles.dots1}/>
                <img src={Dots} alt="Dots" className={styles.dots2}/>
            </div>

            <div className={styles.tools}>
                <div className={styles.languages}>
                    <h1>
                        Languages
                    </h1>

                    <p>
                        Python JS C++ C#
                    </p>

                    <p>
                        Typescript
                    </p>
                </div>

                <div className={styles.databases}>
                    <h1>
                        Databases
                    </h1>

                    <p>
                        SQL
                    </p>
                </div>

                <div className={styles.customtools}>
                    <h1>
                        tools
                    </h1>

                    <p>
                        VSCode WebStorm
                    </p>

                    <p>
                        Figma Git
                    </p>
                </div>

                <div className={styles.other}>
                    <h1>
                        Other
                    </h1>

                    <p>
                        HTML CSS
                    </p>
                </div>

                <div className={styles.frameworks}>
                    <h1>
                        Frameworks
                    </h1>

                    <p>
                        React
                    </p>
                </div>
            </div>
        </div>
    )
}