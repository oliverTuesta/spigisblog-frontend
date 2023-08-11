import type { ReactElement } from 'react';
import { SearchBar } from '@/components/SearchBar';
import PostsCard from '@/components/PostsCard';
import NextLink from 'next/link';

export interface PostsProps {}

export default function Posts(props: PostsProps): ReactElement {
  return (
    <>
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold">Posts</h1>
      <SearchBar className="my-7" />
      <section className="md:flex md:space-x-8 md:space-y-0 space-y-8">
        <div>
          <PostsCard className="bg-transparent shadow-none" />
          <div className="text-right">
            <NextLink className="uppercase text-sm font-bold" href="/categories/1">
              Read more on Gaming &rarr;
            </NextLink>
          </div>
        </div>
        <div>
          <PostsCard className="bg-transparent" />
          <div className="text-right">
            <NextLink className="uppercase text-sm font-bold" href="/categories/1">
              Read more on Gaming &rarr;
            </NextLink>
          </div>
        </div>
      </section>
    </>
  );
}
