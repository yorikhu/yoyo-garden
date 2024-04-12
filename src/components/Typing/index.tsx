"use client";
import { useState } from "react";
import styles from "./index.module.scss";
import { useOneceEffect } from "@/hooks/common";
import { sleep } from "@/utils/common";

type Props = {
  textList?: string[];
};

function Typing({ textList = ["hahahahaha"] }: Props) {
  const [currentText, setCurrentText] = useState<string>("");

  const typing = async (current: string, text: string) => {
    for (let i of text) {
      current += i;
      setCurrentText(current);
      await sleep(100);
    }
    while (current.length > 0) {
      current = current.slice(0, current.length - 1);
      setCurrentText(current);
      await sleep(50);
    }
  };

  useOneceEffect(() => {
    typing(currentText, textList[0]);
  }, []);

  return (
    <div className={styles["typing"]}>
      <p className={styles["text-contain"]}>/* {currentText} */</p>
    </div>
  );
}

export default Typing;
