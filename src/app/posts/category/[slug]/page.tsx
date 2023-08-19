'use client';

import type { ReactElement } from 'react';
import { DataTable } from '@/app/components/DataTable/data-table';
import CategoryModel from '@/models/CategoryModel';
import PostModel from '@/models/PostModel';
import CategoryService from '@/services/CategoryService';
import PostService from '@/services/PostService';
import { useEffect, useState } from 'react';
import { columns } from '../../columns';

export default function CategoryPosts({ params }: { params: { slug: string } }): ReactElement {
  const postService = new PostService();
  const categoryService = new CategoryService();

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [category, setCategory] = useState<CategoryModel>();

  useEffect(() => {
    categoryService.getCategoryBySlug(params.slug).then((category) => {
      setCategory(category);
    });
    postService.getPostsByCategorySlug(params.slug).then((posts) => {
      setPosts(posts);
      console.log(posts);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold capitalize">
        {category ? category.name : 'category'}
      </h1>
      <section className="flex">
        <div className="mx-auto my-5  md:container">
          <DataTable columns={columns} data={posts} />
        </div>
      </section>
    </>
  );
}
