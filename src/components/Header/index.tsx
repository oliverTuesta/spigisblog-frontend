'use client';

import type { ReactElement } from 'react';
import ThemeToggler from './ThemeToggler';

export default function Header(): ReactElement {
  return (
    <>
      <header className="flex justify-between items-center px-8 bg-opacity-50 dark:bg-opacity-10 bg-white">
        <div>
          <a href="#">
            <h1 className="text-2xl text-primary font-extrabold tracking-tighter">SPIGI</h1>
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex justify-between items-center space-x-4 ">
              <li>
                <a className="header__link" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="header__link" href="/">
                  Posts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </header>
    </>
  );
}
