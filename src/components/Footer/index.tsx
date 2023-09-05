import type { ReactElement } from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps): ReactElement {
  return (
    <>
      <div className="max-w-screen-lg container">
        <footer className="flex flex-row justify-between text-gray-400 text-sm my-4 dark:text-gray-500">
          <div>&copy; Oliver Tuesta</div>
        </footer>
      </div>
    </>
  );
}
