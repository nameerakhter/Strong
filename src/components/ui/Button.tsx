import React from 'react';

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`bg-[#d90a14] text-white rounded-full px-6 py-2 text-lg md:text-sm hover:opacity-90 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
