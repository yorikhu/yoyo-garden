import MarkdownView from "@/components/MarkdownView";
import styles from "./page.module.scss";

export default function Blog() {
  const md = `
  # 标题1
  ## 标题2
  ### 标题3
1. 列表1
2. 列表2
\`\`\`js
console.log("123")
\`\`\`
  `;
  return (
    <div className={styles["blog"]}>
      <MarkdownView children={md} />
    </div>
  );
}
