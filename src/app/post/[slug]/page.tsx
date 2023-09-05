'use client';
import type { ReactElement } from 'react';
import Markdown from 'marked-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import PostService from '@/services/PostService';
import NotFound from '@/app/not-found';
import PostModel from '@/models/PostModel';
import NextLink from 'next/link';

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
          <h1 className="uppercase my-8">{post.title}</h1>
          <div className="my-9">
            <div className="flex gap-3 text-muted-foreground">
              <p>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <NextLink className="font-bold" href={`/posts/category/${post.category.slug}`}>
                {post.category.name}
              </NextLink>
            </div>
            <hr className="text-muted" />
          </div>
          <div className="mx-4">
            <Markdown>{postMarkdown}</Markdown>
          </div>
        </div>
      )}
    </>
  );
}
