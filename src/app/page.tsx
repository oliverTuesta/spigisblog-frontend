'use client';

import Image from 'next/image';
import Header from '../components/Header';
import PostsCard from '@/components/PostsCard';
import CategoriesCard from '@/components/CategoriesCard';
import HashtagsCard from '@/components/HashtagsCard';
import PostService from '@/services/PostService';
import PostModel from '@/models/PostModel';
import Hero from '@/components/Hero';
import { useEffect, useState } from 'react';

export default function Home() {
  const postService = new PostService();

  const [recentPosts, setRecentPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    postService.getRecentPosts().then((posts) => setRecentPosts(posts));
  }, []);

  return (
    <>
      <Hero />
      <div className="relative bottom-5 lg:bottom-10 flex flex-row-reverse gap-8">
        <div className="basis-1/3">
          <CategoriesCard />
          <HashtagsCard />
        </div>
        <div className="basis-2/3 flex flex-col gap-8">
          <PostsCard title="recent" posts={recentPosts} />
        </div>
      </div>
    </>
  );
}
