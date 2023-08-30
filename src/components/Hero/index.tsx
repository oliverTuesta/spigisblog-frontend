import Image from 'next/image';
import type { ReactElement } from 'react';

export interface HeroProps {}

export default function Hero(props: HeroProps): ReactElement {
  return (
    <>
      <section className="flex">
        <div className="w-1/2 lg:my-8">
          <h1 className="text-2xl sm:2xl md:text-5xl sm:text-3xl font-extrabold leading-tight tracking-normal">
            Bonjounr and welcome to my humble blog
          </h1>
          <div className="my-8">
            <p className="text-lg sm:text-lg md:text-xl">
              In this space I'll be sharing knowledge, experiences and most of the time some stupid thoughts that comes
              to my mind. Have fun!
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-primary container hero__shape my-auto">
          <Image
            className="hero__image w-full"
            alt="anime girl holding an ipad"
            src="/images/ipad.png"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}
