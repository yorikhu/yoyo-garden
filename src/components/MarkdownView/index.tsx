'use client';
import cls from 'classnames';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './github-markdown-dark.css';
import './github-markdown-light.css';
import styles from './index.module.scss';

type Props = {
  theme?: 'light' | 'black';
  children?: string;
};

function MarkdownView({ theme = 'light', children }: Props) {
  return (
    <ReactMarkdown
      className={cls(styles['markdown-view'], 'markdown-body', theme)}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MarkdownView;
