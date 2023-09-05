import type { ReactElement } from 'react';
import NextImage from 'next/image';

export default function Profile(): ReactElement {
  return (
    <>
      <div className="relative">
        <div className="pb-10">
          <NextImage
            className="object-cover rounded h-60 w-100"
            src="/images/background.jpg"
            width={1800}
            height={1000}
            alt="Profile"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <NextImage
            className="object-cover my-auto rounded-full h-40 w-40 border-primary border-4 mx-auto md:h-50 md:w-50"
            src="/images/spigi.jpg"
            alt="Profile"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-3xl underline decoration-primary font-extrabold my-2">About</h1>
        <div className="py-3">
          <h2 className="text-xl font-extrabold my-2">Blog</h2>
          <p className="md:text-md">
            Hey there, I'm Spigi, and I'm thrilled to welcome you to my humble blog. On this website, I'll be sharing my
            experiences and points of view on various topics that I'm passionate about. The existence of this blog is
            driven by two main reasons. Firstly, I aim to improve my English writing skills. Secondly, I believe it's
            important for everyone to share their journey on various topics because there will always be someone who is
            facing challenges in areas you've already overcome.
          </p>
        </div>
        <div className="py-3">
          <h2 className="text-xl font-extrabold my-2">Spigi</h2>
          <p className="md:text-md">
            I'm Spigi, a software engineer from Peru with a passion for art, gaming and reading. I'm still in
            university, so most of my time is spend there. I love drawing doodles on a daily basis and currently
            learning to paint with watercolors (actually the watercolors are in standby for now). In my free time I play
            some videogames and will probably be posting some reviews. Additionally, I love reading fantasy, light
            novels and have recently been into philosophy.
          </p>
          <br />
          <p>
            If you want to ask me something, send recommendations or correct me in some post please feel free to mail
            me.
          </p>
        </div>
      </div>
    </>
  );
}
