import React from 'react';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

import { LinkHandler } from '../../components/LinkHandler/LinkHandler';
// import { CodeRenderer } from 'components/CodeRenderer/CodeRenderer';
// import "../../components/cards.css"
import * as S from './DocsInfo.styles';
// import { Card } from 'components/Cards';
// import ProfileCard from 'components/Profile';
import { CodeRenderer } from '../../components/CodeRenderer/CodeRenderer';
import ProfileCard from '../../components/Profile';
import { Card } from '../../components/Cards';
import { MovieCards } from '../../components/MovieCards';
import { Footer } from '../../components/Footer';
// import Footer from '../../components/Footer';

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

  return (
    <>
      <S.Container>
        <S.Title>We offer Line Production Services for all projects.</S.Title>

        <div className="cards flex flex-wrap justify-center mt-20">
          {cardTitle.map((title: string) => (
            <Card color="red" tipText={title} secondText="Lorem Ipsum" />
          ))}
        </div>
        <ProfileCard />
        <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {cardTitle.map((title: string) => (
            <MovieCards title={title} subTitle="Lorem Ipsum" />
          ))}
        </div>
      </S.Container>
      <Footer/>
    </>
  );
};
