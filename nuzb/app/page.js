import cols from "../styles/cols.css";
import styles from "../styles/styles.css";

import Index from "@/components/index";
import Releases from "@/components/releases";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Index />
        <div className="content">
          <section className="section">
            <div>
              <Releases />
            </div>
            <div>
              <About />
            </div>
            <div>
              <Contact />
            </div>
          </section>
        </div>
      </main>
    </>

  );
}
