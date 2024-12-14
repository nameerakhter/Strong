import React from 'react';

const MutedButton = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`border-[#a14219] border-2 bg-[#1d1d1d] text-white rounded-full px-6 py-2 text-lg md:text-sm hover:bg-[#a14219] transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default MutedButton;
