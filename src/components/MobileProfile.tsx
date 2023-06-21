import React from 'react';

interface CardProps {
  title: string;
  subTitle: string;
}
const MobileProfile: React.FC<CardProps> = ({ title, subTitle }) => {
  function growCard() {
    const card = document.querySelector('.cardMobile');
    card.classList.add('grow');
  }
  return (
    <div className="cardMobile m-auto my-4" onClick={growCard}>
      <div className="cardMobile-content">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default MobileProfile;
