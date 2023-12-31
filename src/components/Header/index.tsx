'use client';

import type { ReactElement } from 'react';
import ThemeToggler from './ThemeToggler';
import NextLink from 'next/link';

export default function Header(): ReactElement {
  return (
    <>
      <header className="py-2 px-8 bg-opacity-50 dark:bg-opacity-10 bg-white">
        <div className="flex justify-between w-full items-center container max-w-screen-lg">
          <div className="w-1/4">
            <NextLink href="/" className="text-xl text-primary font-extrabold tracking-tighter">
              Spigis blog
            </NextLink>
          </div>
          <div className="">
            <nav>
              <ul className="flex justify-between items-center space-x-4 ">
                <li>
                  <NextLink className="header__link" href="/posts">
                    Posts
                  </NextLink>
                </li>
                <li>
                  <NextLink className="header__link" href="/about">
                    About
                  </NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-1/4 flex justify-between">
            <div></div>
            <ThemeToggler />
          </div>
        </div>
      </header>
    </>
  );
}
