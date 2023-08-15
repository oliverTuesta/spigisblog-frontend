import type { ReactElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import NextLink from 'next/link';
import PostModel from '@/models/PostModel';

export interface PostsCardProps {
  title: string;
  posts: PostModel[];
}

export default function PostsTitleCard(props: PostsCardProps): ReactElement {
  if (props.posts == null || props.posts.length === 0) {
    return <></>;
  }
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-0">
            {props.posts.map((post) => (
              <li key={post.id}>
                <div className="divider my-2"></div>
                <NextLink href={`/post${post.slug}`}>{post.title}</NextLink>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
