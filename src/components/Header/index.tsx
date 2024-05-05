"use client";
import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import cls from "classnames";

const navList = [
  {
    name: "Home",
    link: "/garden/home",
  },
  {
    name: "Blog",
    link: "/garden/blog",
  },
  {
    name: "About",
    link: "/garden/about",
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <div className={styles["header"]}>
      <div className={styles["left-contain"]}>
        <h2 className={styles["main-logo"]}>
          <Link href="/garden/home">Yoyo&lsquo;s Garden</Link>
        </h2>
      </div>
      <div className={styles["right-contain"]}>
        <ul className={styles["nav-list"]}>
          {navList.map((nav) => (
            <li
              key={nav.name}
              className={cls(styles["nav-item"], {
                [styles["active"]]: nav.link === pathname,
              })}
            >
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
