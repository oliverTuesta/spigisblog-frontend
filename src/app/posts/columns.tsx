'use client';

import PostModel from '@/models/PostModel';
import { ColumnDef } from '@tanstack/react-table';
import NextLink from 'next/link';

export const columns: ColumnDef<PostModel>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      return <NextLink href={`/post/${row.original.slug}`}> {row.original.title}</NextLink>;
    },
  },
  {
    accessorKey: 'summary',
    header: 'Summary',
    cell: ({ row }) => {
      return <NextLink href={`/post/${row.original.slug}`}> {row.original.summary}</NextLink>;
    },
  },
  {
    accessorKey: 'category.name',
    header: 'Category',
    cell: ({ row }) => {
      return <NextLink href={`/posts/category/${row.original.category.slug}`}> {row.original.category.name}</NextLink>;
    },
  },
  {
    accessorKey: 'publishDate',
    header: 'Publish Date',
    cell: ({ row }) => {
      return new Date(row.original.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
];
