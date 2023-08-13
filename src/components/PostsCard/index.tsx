import type { ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import PostSummary from '../PostSummary';
import PostModel from '@/models/PostModel';

export interface PostsCardProps {
  className?: string;
  posts?: PostModel[];
}

export default function PostsCard({ className, posts = [] }: PostsCardProps): ReactElement {
  if (posts.length === 0) {
    return <>No posts</>;
  }
  return (
    <>
      <Card className={`${className}`}>
        <CardHeader>
          <CardTitle>Popular</CardTitle>
        </CardHeader>
        {posts.map((post) => (
          <PostSummary key={post.id} post={post} />
        ))}
      </Card>
    </>
  );
}
