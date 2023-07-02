import React from 'react';
import Link from 'next/link';

import * as S from './CopyInfo.styles';
import logoSrc from './images/MP FILMS.svg';
import { PreloadImage } from '../../components/PreloadImage/PreloadImage';
import { LinkHandler } from '../../components/LinkHandler/LinkHandler';

interface Props {
  repoHref?: string;
}

export const CopyInfo = (props: Props) => {
  const { repoHref = 'https://www.npmjs.com/package/react-just-parallax' } = props;

  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref="https://www.linkedin.com/in/vishwaskatiyar/">
          <S.GithubLink>Developer Github</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        showcase by
        <LinkHandler isExternal elHref="https://www.linkedin.com/in/vishwaskatiyar/">
          <S.AuthorLink>@VishwasKatiyar</S.AuthorLink>
        </LinkHandler>
      </S.AuthorWrapper>
      <Link href="/" passHref>
        <S.LogoWrapper>
          <PreloadImage shouldContain imageSrc={logoSrc as string} alt="React Just Parallax" />
        </S.LogoWrapper>
      </Link>
    </>
  );
};
