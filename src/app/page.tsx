'use client';
import Image from 'next/image';
import { WelcomeToBusybusy } from '~/components/Welcome';
import { Form } from '~/components/form/Form';

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <div className="flex flex-row w-full min-h-screen max-w-5xl items-start  justify-between  py-12">
        <section className="flex flex-col w-full  pr-12 py-12">
          <WelcomeToBusybusy />
        </section>
        <section className="flex flex-col basis-1/3 shrink-0 grow-0 p-4 w-full">
          <div className="flex flex-col justify-center self-center">
            <Icon />
          </div>

          <Form />
        </section>
      </div>
    </main>
  );
};

const Icon = () => (
  <figure className="relative m-4 block hover:rotate-12 transition duration-200">
    <a href="https://busybusy.com/" target="_blank">
      <Image
        src={`/busybusy_icon.svg`}
        alt="busybusy Icon"
        priority
        width={256}
        height={256}
      />
    </a>
  </figure>
);

export default Home;
