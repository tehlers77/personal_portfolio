import Head from "next/head";
import Image from "next/image";
import te_ski from "assets/silverton.png";

import { Footer, Header, Navbar } from "../../common";
import { FunctionComponent, PropsWithChildren } from "react";

const BaseLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}: any) => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8'>
        <Head>
          <title>Portfolio - Trevor Ehlers</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className='relative'>
          <div className='relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
            <Navbar />
            <Header />
          </div>
          <div className='relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <Image
              priority
              layout='fill'
              alt={"Silverton Mountain April 2023"}
              className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
              src={te_ski}
            />
          </div>
        </div>

        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;