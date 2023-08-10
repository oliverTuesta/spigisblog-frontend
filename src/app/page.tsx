import Image from 'next/image';
import Header from '../components/Header';
import PostsCard from '@/components/PostsCard';
import CategoriesCard from '@/components/CategoriesCard';
import HashtagsCard from '@/components/HashtagsCard';

export default function Home() {
  return (
    <>
      <section className="flex gap-2 lg:gap-20">
        <div className="flex-1 lg:my-8">
          <h1 className="text-2xl sm:2xl md:text-6xl sm:text-5xl font-extrabold leading-tight tracking-normal">
            Lorem maiores eos numquam ipsam repudiandae?
          </h1>
          <div className="my-8">
            <p className="text-lg sm:text-lg md:text-xl">
              Elit autem ducimus alias vel magnam Ullam sit maiores dolorum officiis corporis? Magnam ullam non sunt
              quisquam optio! Numquam illo quaerat unde quia earum
            </p>
          </div>
        </div>
        <div className="flex-1 bg-primary container hero__shape my-auto">
          <Image
            className="hero__image w-full"
            alt="anime girl holding an ipad"
            src="/images/ipad.png"
            width={500}
            height={500}
          />
        </div>
      </section>
      <div className="relative bottom-5 lg:bottom-10 flex flex-row-reverse gap-8">
        <div className="basis-1/3">
          <CategoriesCard />
          <HashtagsCard />
        </div>
        <div className="flex flex-col gap-8">
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </div>
      </div>
    </>
  );
}
