
import React from 'react';

interface AdSpaceProps {
  type: 'vertical' | 'horizontal';
  id: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ type, id }) => {
  return (
    <div 
      id={`ad-container-${id}`}
      className={`ad-space ${type === 'horizontal' ? 'horizontal' : 'vertical'}`}
    >
      <span>Ad Space ({type})</span>
    </div>
  );
};

export default AdSpace;
