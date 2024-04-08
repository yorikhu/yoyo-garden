import Link from "next/link";
import styles from "./index.module.scss";

function Header() {
  const navList = [
    {
      name: "HOME",
      link: "/home",
    },
    {
      name: "BLOG",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div className={styles["header"]}>
      <div className={styles["left-contain"]}>
        <h2 className={styles["main-logo"]}>
          <Link href="/home">Yoyo's Garden</Link>
        </h2>
      </div>
      <div className={styles["right-contain"]}>
        <ul className={styles["nav-list"]}>
          {navList.map((nav) => (
            <li className={styles["nav-item"]}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
