import type { ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import PostSummary from '../PostSummary';
import PostModel from '@/models/PostModel';

export interface PostsCardProps {
  className?: string;
  posts?: PostModel[];
  title: string;
}

export default function PostsCard({ className, posts = [], title }: PostsCardProps): ReactElement {
  if (posts.length === 0) {
    return <>No posts</>;
  }
  return (
    <>
      <Card className={`${className}`}>
        <CardHeader>
          <CardTitle className="capitalize">{title}</CardTitle>
        </CardHeader>
        {posts.map((post) => (
          <PostSummary key={post.id} post={post} />
        ))}
      </Card>
    </>
  );
}
