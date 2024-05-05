import Typing from "@/components/Typing";
import styles from "./page.module.scss";
import motto from "@/constants/motto";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["title-group"]}>
        <h2 className={styles["main-title"]}>
          <span className={styles["strong-text"]}>悠悠</span>
          <span className={styles["tiny-text"]}>の花园</span>
        </h2>
        <h3 className={styles["sub-title"]}>Yoyo&apos;s Garden</h3>
      </div>
      <Typing textList={motto} />
    </div>
  );
}
