import React from 'react';

export interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const SEOHead = (props: HeadProps) => {
  return <h1>Mp Films | Line Production</h1>;
};
