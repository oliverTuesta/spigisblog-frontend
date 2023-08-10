import type { ReactElement } from 'react';
import NextImage from 'next/image';
import PostsCard from '@/components/PostsCard';
import PostsTitleCard from '@/components/PostsTitleCard';

export interface ProfileProps {}

export default function Profile(props: ProfileProps): ReactElement {
  return (
    <>
      <NextImage
        className="object-cover rounded h-60 w-100"
        src="/images/background.jpg"
        width={1800}
        height={1000}
        alt="Profile"
      />
      <div className="my-8 max-w-screen-md mx-auto">
        <div className="container flex gap-8 flex-row flex-shrink-0 flex-grow-0">
          <NextImage
            className="object-cover my-auto rounded-full h-40 w-40 border-primary border-4 md:h-60 md:w-60"
            src="/images/post.png"
            alt="Profile"
            width={500}
            height={500}
          />
          <div className="flex-auto">
            <h1 className="text-4xl font-bold my-4">Profile</h1>
            <p className="md:text-lg">
              Lorem dignissimos totam quam incidunt ipsum. Doloremque officiis dolorum harum praesentium architecto quos
              alias Ullam.
            </p>
          </div>
        </div>
        <div className="my-10">
          <PostsCard />
        </div>
        <div className="">
          <PostsTitleCard />
        </div>
      </div>
    </>
  );
}
