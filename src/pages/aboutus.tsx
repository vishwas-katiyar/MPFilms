import React, { useRef, useState } from 'react';

import { MouseParallax, ScrollParallax } from 'react-just-parallax';
import JustParallax from 'react-just-parallax';
import * as S from '../containers/Examples/1/ExamplePage.styles';
import { ReCAPTCHAForm } from 'components/GoogleCaptcha';

export default function aboutus() {
  const scrollContainerRef = useRef<null | HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  return (
    <>
      {/* <S.GithubWrapper>
        <LinkHandler
          isExternal
          elHref={
            'https://github.com/michalzalobny/react-just-parallax/tree/main/frontend/src/containers/Examples/1'
          }
        >
          <S.GithubLink>This page&#8216;s code</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper> */}
      {/* <Head /> */}
      <S.ScrollContainer ref={scrollContainerRef}>
        <S.Wrapper initial="initial" animate="animate" style={{ width: '100%' }}>
          <section>
            <div className="bg-black text-white py-20">
              <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                <div className="flex flex-col w-full lg:w-2/5 justify-center items-start p-8">
                  <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                    About Us
                  </h1>
                  <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                    Space : The Timeless Infinity
                  </h2>
                  <p className="text-sm md:text-base text-gray-50 mb-4">
                    Explore your favourite events and register now to showcase your talent and win
                    exciting prizes.
                  </p>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                  >
                    Explore Now
                  </a>
                </div>
                <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-3/5  justify-center">
                  <div className="h-48 flex flex-wrap content-center justify-center">
                    <div>
                      <img
                        className="inline-block mt-28 hidden xl:block"
                        src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                        alt="aeroplane"
                      />
                    </div>
                    <div>
                      <img
                        className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                        src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                        alt="flight"
                      />
                    </div>
                    <div>
                      <img
                        className="inline-block mt-28 hidden lg:block"
                        src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                        alt="about us"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </S.Wrapper>

        <div className="container my-24 mx-auto md:px-6 text-white p-8">
          <section className="mb-32">
            <h2 className="mb-12 text-center text-3xl font-bold">Why is it so great?</h2>

            <div className="flex flex-wrap items-center">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg"
                    className="w-full"
                    alt="ring"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                      <div className="flex h-full items-center justify-center">
                        <div className="px-6 py-12 text-center text-white md:px-12">
                          <h3 className="mb-6 text-2xl font-bold uppercase">
                            The future is
                            <u className="text-[hsl(210,12%,80%)]">now</u>
                          </h3>
                          <p className="text-[hsl(210,12%,80%)]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia
                            laboriosam error consequuntur fugit, doloribus rerum, iure nesciunt amet
                            quidem veniam cupiditate hic fugiat dolore aperiam quisquam libero earum
                            quibusdam?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                <ScrollParallax lerpEase={0.5}>
                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <img
                          className="h-6 w-6 text-white"
                          src="https://i.postimg.cc/FsrZNj1N/trust-3967544.png"
                          alt="trust"
                        />
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Trusted Line Production Company</p>
                      <p className="">
                        MP Films Line Production is a reputable and trustworthy line production
                        company based in Madhya Pradesh.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Extensive Industry Experience</p>
                      <p>
                        With years of experience in the film industry, we bring a wealth of
                        knowledge and expertise to every project we undertake.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Comprehensive Services</p>
                      <p>
                        We specialize in offering a wide range of production services to cater to
                        the needs of both local and international clients.
                      </p>
                    </div>
                  </div>

                  <div className=" mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Dedicated Team of Professionals</p>
                      <p>
                        Our team consists of passionate and skilled professionals who are committed
                        to delivering exceptional results.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Client-Centric Approach</p>
                      <p>
                        Our focus is on understanding and fulfilling the unique requirements of each
                        client, ensuring their vision comes to life on screen.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">State-of-the-Art Equipment</p>
                      <p>
                        We utilize cutting-edge equipment and technology to enhance the quality and
                        creativity of our productions.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Seamless Production Process</p>
                      <p>
                        From pre-production planning to post-production, we ensure a smooth and
                        efficient production process from start to finish.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-[0.55rem] font-bold">Local and International Projects</p>
                      <p>
                        We have successfully handled projects from both local and international
                        clients, fostering a diverse and global perspective.
                      </p>
                    </div>
                  </div>
                </ScrollParallax>
              </div>
            </div>
          </section>
        </div>
        <ReCAPTCHAForm />
      </S.ScrollContainer>
    </>
  );
}
