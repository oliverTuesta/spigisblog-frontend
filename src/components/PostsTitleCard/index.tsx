import type { ReactElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import NextLink from 'next/link';

export interface PostsCardProps {}

export default function PostsTitleCard(props: PostsCardProps): ReactElement {
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-0">
            <li>
              <div className="divider my-2"></div>
              <NextLink href="#">Adipisicing expedita vero perferendis similique?</NextLink>
            </li>
            <li>
              <div className="divider my-2"></div>
              <NextLink href="#">Adipisicing expedita vero perferendis similique?</NextLink>
            </li>
            <li>
              <div className="divider my-2"></div>
              <NextLink href="#">Adipisicing expedita vero perferendis similique?</NextLink>
            </li>
            <li>
              <div className="divider my-2"></div>
              <NextLink href="#">Adipisicing expedita vero perferendis similique?</NextLink>
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
