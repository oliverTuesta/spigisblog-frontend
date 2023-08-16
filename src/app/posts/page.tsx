'use client';

import { SearchBar } from '@/components/SearchBar';
import PostService from '@/services/PostService';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';
import { useEffect, useState } from 'react';
import PostModel from '@/models/PostModel';

export interface PostsProps {}

export default function Posts(props: PostsProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const postService = new PostService();
  useEffect(() => {
    postService.getAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold">Posts</h1>
      <section className="flex">
        <div className="mx-auto  md:container">
          <DataTable columns={columns} data={posts} />
        </div>
      </section>
    </>
  );
}
