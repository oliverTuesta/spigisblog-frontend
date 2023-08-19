'use client';

import type { ReactElement } from 'react';
import { DataTable } from '@/app/components/DataTable/data-table';
import TagModel from '@/models/TagModel';
import PostModel from '@/models/PostModel';
import TagService from '@/services/TagService';
import PostService from '@/services/PostService';
import NotFound from '@/app/not-found';
import { useEffect, useState } from 'react';
import { columns } from '../../columns';

export default function TagPosts({ params }: { params: { slug: string } }): ReactElement {
  const postService = new PostService();
  const tagService = new TagService();

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [tag, setTag] = useState<TagModel>();

  const [tagError, setTagError] = useState<boolean>(false);

  useEffect(() => {
    tagService
      .getTagBySlug(params.slug)
      .then((tag) => {
        setTag(tag);
      })
      .catch((err) => {
        setTagError(true);
        console.log(err);
      });
    postService.getPostsByTagSlug(params.slug).then((posts) => {
      setPosts(posts);
      console.log(posts);
    });
  }, []);

  return (
    <>
      {tagError && <NotFound />}
      {tag && (
        <div>
          <h1 className="text-3xl lg:text-4xl text-center font-extrabold capitalize">{tag ? tag.name : 'tag'}</h1>
          <section className="flex">
            <div className="mx-auto my-5  md:container">
              <DataTable columns={columns} data={posts} />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
