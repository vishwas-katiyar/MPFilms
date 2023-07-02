import React from 'react';

interface CardProps {
  title: string;
  subTitle: string;
  url: string;
}
const MobileProfile: React.FC<CardProps> = ({ title, subTitle, url }) => {
  function growCard() {
    const card = document.querySelector('.cardMobile');
    card.classList.add('grow');
  }
  const style = {
    backgroundImage: `url(${url})`,
    '&::before': {
      backgroundImage: `url(${url})`,
    },
  };
  return (
    <div className="cardMobile m-auto my-4" style={style} onClick={growCard}>
      <div className="cardMobile-content">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default MobileProfile;
