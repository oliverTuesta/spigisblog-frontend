import type { ReactElement } from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps): ReactElement {
  return (
    <>
      <div className="max-w-screen-lg container">
        <footer className="flex flex-row justify-between text-gray-500 text-sm my-4">
          <div>&copy; Spigi</div>
          <a href="https://x.com/SpigiPlant">SpigiPlant</a>
        </footer>
      </div>
    </>
  );
}
