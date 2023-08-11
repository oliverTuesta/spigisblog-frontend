'use client';
import type { ReactElement } from 'react';
import Markdown from 'marked-react';
import styles from './styles.module.css';
import post from './post.json';

export interface PostProps {}

export default function Post(props: PostProps): ReactElement {
  const postMarkdown = post.post;
  return (
    <>
      <div className={styles.post}>
        <Markdown>{postMarkdown}</Markdown>
      </div>
    </>
  );
}
