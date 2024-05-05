"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { sleep } from "@/utils/common";

type Props = {
  textList?: string[];
};

function Typing({ textList = [] }: Props) {
  const [currentText, setCurrentText] = useState<string>("");

  class TextListLoop {
    needClear: boolean = false;
    async typing(current: string, text: string) {
      for (let i of text) {
        if (this.needClear) break;
        current += i;
        setCurrentText(current);
        await sleep(100);
      }
      await sleep(1000);
      while (current.length > 0) {
        if (this.needClear) break;
        current = current.slice(0, current.length - 1);
        setCurrentText(current);
        await sleep(50);
      }
    }
    async runTextListLoop() {
      if (this.needClear) return;
      const text = textList.shift();
      if (!text) return;
      textList.push(text);
      await this.typing(currentText, text);
      this.runTextListLoop();
    }
    async clearTextListLoop() {
      this.needClear = true;
    }
  }

  useEffect(() => {
    const loop = new TextListLoop();
    loop.runTextListLoop();
    return () => {
      loop.clearTextListLoop();
    };
  }, []);

  return (
    <div className={styles["typing"]}>
      <p className={styles["text-contain"]}>{`/* ${currentText} */`} </p>
    </div>
  );
}

export default Typing;
