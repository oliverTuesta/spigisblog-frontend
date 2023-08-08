'use client';

import type { ReactElement } from 'react';
import ThemeToggler from './ThemeToggler';

export default function Header(): ReactElement {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-opacity-50 dark:bg-opacity-10 bg-white">
        <div>
          <a href="#">
            <h1 className="text-2xl font-extrabold tracking-tighter">SPIGI</h1>
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex justify-between items-center space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
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
