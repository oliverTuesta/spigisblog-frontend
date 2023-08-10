import type { ReactElement } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

export interface PostSummaryProps {}

export default function PostSummary(props: PostSummaryProps): ReactElement {
  return (
    <>
      <div className="divider"></div>
      <div className="container flex gap-4 py-3">
        <div className="">
          <NextImage
            className="rounded object-cover h-40 w-40"
            alt="todo"
            src="/images/post.png"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Post Title</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <p className="">#test #test #test</p>
            <div>
              <p className="">
                July 28, 2023{' '}
                <NextLink href="/profile" className="font-bold">
                  SPIGI
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
