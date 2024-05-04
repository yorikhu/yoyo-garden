"use client";
import { useState } from "react";
import styles from "./index.module.scss";
import { useOneceEffect } from "@/hooks/common";
import { sleep } from "@/utils/common";

type Props = {
  textList?: string[];
};

function Typing({
  textList = ["花开堪折直需折，莫待无花空折枝", "测试文案"],
}: Props) {
  const [currentText, setCurrentText] = useState<string>("");

  const typing = async (current: string, text: string) => {
    for (let i of text) {
      current += i;
      setCurrentText(current);
      await sleep(100);
    }
    await sleep(1000);
    while (current.length > 0) {
      current = current.slice(0, current.length - 1);
      setCurrentText(current);
      await sleep(50);
    }
  };

  const runTextListLoop = async () => {
    const text = textList.shift();
    if (!text) return;
    await typing(currentText, text);
    textList.push(text);
    runTextListLoop();
  };

  useOneceEffect(() => {
    runTextListLoop();
  }, []);

  return (
    <div className={styles["typing"]}>
      <p className={styles["text-contain"]}>/* {currentText} */</p>
    </div>
  );
}

export default Typing;
