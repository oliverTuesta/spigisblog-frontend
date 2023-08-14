'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { ReactElement } from 'react';
import CategoryService from '@/services/CategoryService';
import CategoryModel from '@/models/CategoryModel';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function CategoriesCard(): ReactElement {
  const categoryService = new CategoryService();
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    categoryService.getAll().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <h3 className="font-bold text-2xl">Categories</h3>
        </CardHeader>
        <CardContent>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <NextLink href={`/posts/category/${category.slug}`} className="font-bold">
                  {category.name}:
                </NextLink>{' '}
                {category.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
