import styles from "./App.module.css";
import Header from "./Components/Header/Header.tsx";
import First from "./Components/First/First.tsx";
import Quote from "./Components/Quote/Quote";
import Projects from "./Components/Projects/Projects.tsx";
import Skills from "./Components/Skills/Skills.tsx";
import About from "./Components/About/About.tsx";
import Contacts from "./Components/Contacts/Contacts.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <First />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
