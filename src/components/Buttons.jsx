import React from 'react';

const Buttons = ({ text, className }) => {
  return (
    <button className={` ${className} w-[100px] cursor-pointer rounded-[0.94rem] border-[3px] p-[0.56rem] h-full text-[0.95rem] flex justify-center items-center font-bold`}>
      {text}
    </button>
  );
};

export default Buttons;
