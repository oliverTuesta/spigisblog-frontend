import type { ReactElement } from 'react';
import { SearchBar } from '@/components/SearchBar';
import PostsCard from '@/components/PostsCard';
import NextLink from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface LoginProps {}

export default function Login(props: LoginProps): ReactElement {
  return (
    <>
      <div className="h-[calc(100vh-11rem)] pt-16">
        <Card className="place-self-center max-w-xl mx-auto">
          <CardHeader>
            <h1 className="text-3xl my-5 lg:text-4xl text-center font-extrabold">Login</h1>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>{' '}
    </>
  );
}
