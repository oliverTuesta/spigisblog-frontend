'use client';

import type { ReactElement } from 'react';
import { SearchBar } from '@/components/SearchBar';
import PostsCard from '@/components/PostsCard';
import NextLink from 'next/link';
import PostsTitleCard from '@/components/PostsTitleCard';
import CategoryModel from '@/models/CategoryModel';
import CategoryService from '@/services/CategoryService';
import PostService from '@/services/PostService';
import PostModel from '@/models/PostModel';
import { useEffect, useState } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export interface PostsProps {}

export default function Posts(props: PostsProps): ReactElement {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const postService = new PostService();
  const categoryService = new CategoryService();

  useEffect(() => {
    categoryService.getAll().then((categories) => {
      setCategories(categories);
      categories.map((category) => {
        postService.getPostsByCategory(category.id).then((posts) => {
          category.posts = posts;
          console.log(posts);
        });
      });
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold">Posts</h1>
      <SearchBar className="my-7" />
      <section className="flex">
        <div className="container mx-auto py-10"></div>
      </section>
    </>
  );
}
