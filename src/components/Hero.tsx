import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="text-center w-full">
        <h1 className="text-[20vw] leading-none font-bold tracking-tighter uppercase">
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default Hero;