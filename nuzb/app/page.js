import cols from "../styles/cols.css";
import styles from "../styles/styles.css";

import Index from "@/components/index";
import Releases from "@/components/releases";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Index />
        <div className="content">
          <Releases />
        </div>
      </main>
    </>

  );
}
