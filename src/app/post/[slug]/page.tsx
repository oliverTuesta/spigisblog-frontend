'use client';
import type { ReactElement } from 'react';
import Markdown from 'marked-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import PostService from '@/services/PostService';

export default function Post({ params }: { params: { slug: string } }): ReactElement {
  const [postMarkdown, setPostMarkdown] = useState('');

  const postService = new PostService();

  useEffect(() => {
    postService.getPostBySlug(params.slug).then((post) => {
      setPostMarkdown(post.content);
    });
  }, []);

  return (
    <>
      <div className={styles.post}>
        <div className="mx-4">
          <Markdown>{postMarkdown}</Markdown>
        </div>
      </div>
    </>
  );
}
