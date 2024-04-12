import Typing from "@/components/Typing";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <Typing />
    </div>
  );
}
