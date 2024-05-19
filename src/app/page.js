import Image from "next/image";
import styles from "./page.module.css";
import UserDashBoard from "@/app/UserDashBoard/UserDashBoard";


export default function Home() {
  return (
    <main className={styles.main}>
      <UserDashBoard />
    </main>
  );
}
