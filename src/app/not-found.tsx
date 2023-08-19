import type { ReactElement } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound(): ReactElement {
  return (
    <>
      <div className="h-[calc(100vh-11rem)] pt-16">
        <div className="place-self-center max-w-xl mx-auto">
          <div>
            <NextImage
              className="object-cover rounded h-60 w-100"
              src="/images/working.png"
              width={1800}
              height={1000}
              alt="Profile"
            />
          </div>
          <div>
            <h1 className="text-3xl my-5 lg:text-4xl text-center font-extrabold">Not Found</h1>
            <p className="text-center">
              The resource that you are trying to access has been removed or does not exist.
            </p>
            <div className="w-full flex items-center mt-4">
              <NextLink className="mx-auto" href="/">
                <Button>
                  Home
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </NextLink>
            </div>
          </div>
          <div className="space-y-4"></div>
        </div>
      </div>
    </>
  );
}
