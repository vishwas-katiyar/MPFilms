import React from 'react';

interface CardProps {
  color: string;
  tipText: string;
  secondText: string;
}

export const Card: React.FC<CardProps> = ({ color, tipText, secondText }) => {
  return (
    <div className="card m-4">
      <div className="card2">{tipText}</div>
    </div>
  );
};
