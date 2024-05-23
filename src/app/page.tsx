import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <input type="date" placeholder="date input" />
      <input type="datetime-local" placeholder="datetime input" />

      
    </main>
  );
}
