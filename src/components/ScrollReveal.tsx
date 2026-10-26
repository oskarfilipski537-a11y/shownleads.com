import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

