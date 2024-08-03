import React from 'react';

type Props = {
  children: React.ReactNode;
};
const GameFrame: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`w-full h-screen max-w-lg mx-auto shadow-md bg-slate-300 flex flex-row justify-center`}
    >
      {children}
    </div>
  );
};

export default GameFrame;
