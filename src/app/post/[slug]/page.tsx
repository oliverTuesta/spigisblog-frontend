'use client';
import type { ReactElement } from 'react';
import Markdown from 'marked-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import PostService from '@/services/PostService';
import NotFound from '@/app/not-found';
import PostModel from '@/models/PostModel';

export default function Post({ params }: { params: { slug: string } }): ReactElement {
  const [postMarkdown, setPostMarkdown] = useState('');
  const [post, setPost] = useState<PostModel>();
  const [postError, setPostError] = useState<boolean>(false);

  const postService = new PostService();

  useEffect(() => {
    postService
      .getPostBySlug(params.slug)
      .then((post) => {
        setPost(post);
        setPostMarkdown(post.content);
      })
      .catch((err) => {
        setPostError(true);
        console.log(err);
      });
  }, []);

  return (
    <>
      {postError && <NotFound />}
      {post && (
        <div className={styles.post}>
          <div className="mx-4">
            <Markdown>{postMarkdown}</Markdown>
          </div>
        </div>
      )}{' '}
    </>
  );
}
