import React from 'react';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { CodeRenderer } from 'components/CodeRenderer/CodeRenderer';

import * as S from './DocsInfo.styles';
import { Card } from 'components/Cards';
import ProfileCard from 'components/Profile';

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
        <S.Paragraph>
          Check all the parameters and props for scroll parallax on{' '}
          <LinkHandler isExternal elHref="https://www.npmjs.com/package/react-just-parallax">
            <S.InlineLink>official npm page</S.InlineLink>
          </LinkHandler>
        </S.Paragraph>
        <S.ExampleWrapper $bgColor="#FFB66B">
          <S.Ring $dim />
          <ScrollParallax isAbsolutelyPositioned scrollContainerRef={scrollContainerRef}>
            <S.Ring />
          </ScrollParallax>
        </S.ExampleWrapper>
        <S.Paragraph>Example code:</S.Paragraph>
        <CodeRenderer codeText={scrollText} />

        <S.SectionSeparator />

        <S.Title>🖱️ Mouse / Touch Parallax</S.Title>
        <S.Paragraph>
          {/* <div className="text-white"> */}
          Check all the parameters and props for mouse parallax on {/* </div> */}
          {/* <LinkHandler isExternal elHref="https://www.npmjs.com/package/react-just-parallax">
            <S.InlineLink>official npm page</S.InlineLink>
          </LinkHandler> */}
        </S.Paragraph>
        <S.ExampleWrapper $bgColor="#6d66ff">
          <S.Ring $dim />
          <MouseParallax
            enableOnTouchDevice
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainerRef}
          >
            <S.Ring />
          </MouseParallax>
        </S.ExampleWrapper>
        <S.Paragraph>Example code:</S.Paragraph>
        <CodeRenderer codeText={mouseText} />
      </S.Container>
    </>
  );
};
