import type { ReactElement } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import PostModel from '@/models/PostModel';

export interface PostSummaryProps {
  post: PostModel;
}

export default function PostSummary({ post }: PostSummaryProps): ReactElement {
  console.log(post.category);
  return (
    <>
      <div className="divider"></div>
      <div className="mx-3 flex gap-4 py-3">
        <div className="">
          <NextLink href={`/post/${post.slug}`}>
            <NextImage
              className="rounded object-cover h-40 w-40"
              alt="todo"
              src={post.thumbnailUrl}
              width={300}
              height={300}
            />
          </NextLink>
        </div>
        <div className="w-3/4 flex flex-col justify-between text-card-foreground">
          <div>
            <NextLink href={`/post/${post.slug}`}>
              <h3 className="text-2xl font-semibold dark:text-primary mb-0">{post.title}</h3>
            </NextLink>
            <p className="">{post.summary}</p>
            {post.category && (
              <NextLink href={`/posts/category/${post.category.slug}`} className="font-semibold text-xs underline">
                {' '}
                {post.category.name}
              </NextLink>
            )}
          </div>
          <div className="flex justify-between text-sm text-slate-500 dark:text-gray-400">
            <ol>
              {post.tags.map((tag) => (
                <li key={tag.id}>{<NextLink href={`/tag/${tag.slug}`}>{`#${tag.name} `}</NextLink>}</li>
              ))}
            </ol>
            <div>
              <p className="">
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
