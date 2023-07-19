import React, { useRef } from 'react';
import * as S from './DocsInfo.styles';
// import ScrollAnimation from 'react-animate-on-scroll';
import ProfileCard from '../../components/Profile';
import { Card } from '../../components/Cards';
import { MovieCards } from '../../components/MovieCards';
import { Footer } from '../../components/Footer';
import MobileProfile from 'components/MobileProfile';
import { ClientsLogo } from 'components/ClientsLogo';
import { FeatureList } from 'components/FeatureList';
import { ScrollParallax, ScrollParallaxHandle } from 'react-just-parallax';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';
// import ScrollEffect from 'react-scroll-effects';
// import Footer from '../../components/Footer';
// import e from '../CopyInfo/images/MP FILMS.png';

const cardTitle: string[] = [
  'Feature Films',
  'Ad Films',
  'Web Series',
  'TV Serials',
  'Corporate Films',
  'Commertial Films',
  'Documentaries',
  'Reality Show Auditions',
  'Av Shoot',
  'Music Album',
  'Short films',
  'Film Events',
];

const projectList: { name: string; url: string }[] = [
  { name: 'Ek Duje Ke Vaste - 2', url: 'https://i.ibb.co/YWs1sn4/ekdujekwaste.webp' },
  { name: 'KBC - Kaun Banega Crorepati', url: 'https://i.ibb.co/s3763pw/kbc.jpg' },
  { name: 'Life Navrangi', url: 'https://i.ibb.co/pLJd29z/lifenavrangi.jpg' },
  { name: 'The Big Picture', url: 'https://i.ibb.co/G3KGrWP/thebigpicture.png' },
  { name: 'Saajish - The Conspiracy', url: 'https://i.ibb.co/3rx37BB/saajish.jpg' },
  { name: 'Online 24x7', url: 'https://i.ibb.co/Tqt3yPc/Online-24x7-Web-Series-1.jpg' },
  {
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    url: 'https://i.ibb.co/p10wnNB/kokilaben.jpg',
  },
];

interface Props {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const scrollText = `import { ScrollParallax } from 'react-just-parallax';

<div className='wrapper'>
  <ScrollParallax isAbsolutelyPositioned>
    <span className='ring'/>
  </ScrollParallax>
</div>
`;

const mouseText = `import { MouseParallax } from 'react-just-parallax';

<div className='wrapper'>
  <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
    <span className='ring'/>
  </MouseParallax>
</div>
`;

export const DocsInfo = (props: Props) => {
  const { scrollContainerRef } = props;
  const scrollParallaxRef = useRef<ScrollParallaxHandle | null>(null);

  return (
    <>
      <S.Container>
        <S.Title>We offer Line Production Services for all projects.</S.Title>

        <div className="cards flex flex-wrap justify-center mt-20">
          {cardTitle.map((title: string, index) => (
            <Card color="red" key={index} tipText={title} secondText="Lorem Ipsum" />
          ))}
        </div>
        <ProfileCard />
        <hr />
        <div className="animate__animated animate__bounce">
          <div className="hidden md:grid gap-11 md:grid-cols-2 lg:grid-cols-3 justify-center mt-10">
            {projectList.map(({ name, url }, index) => (
              <MovieCards title={name} key={index} subTitle={name} url={url} />
            ))}
          </div>
          <div className="md:hidden justify-center mt-10">
            {projectList.map(({ name, url }, index) => (
              <MobileProfile title={name} key={index} subTitle={name} url={url} />
            ))}
          </div>
        </div>
      </S.Container>

      <button
        onClick={() => (location.href = '/examples/1')}
        className="w-full h-auto mb-4 text-[x-large] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Show More
      </button>
      <hr />
      <div className="wrapper">
        <ScrollParallax ref={scrollParallaxRef}>
          <FeatureList />
        </ScrollParallax>
      </div>

      <hr />
      <ClientsLogo />
      <hr />
      <Footer />
    </>
  );
};
