import type { ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import PostSummary from '../PostSummary';

export interface PostsCardProps {}

export default function PostsCard({ className = '' }): ReactElement {
  return (
    <>
      <Card className={className}>
        <CardHeader>
          <CardTitle>Popular</CardTitle>
        </CardHeader>
        <PostSummary />
        <PostSummary />
        <PostSummary />
      </Card>
    </>
  );
}
