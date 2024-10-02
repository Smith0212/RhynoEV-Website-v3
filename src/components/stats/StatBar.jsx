import React from 'react';

const StatBar = ({ label, value }) => (
  <div className="flex gap-10 mt-14 max-md:mt-10 max-md:mr-1.5">
    <div className="my-auto text-xl font-bold tracking-widest text-white">
      {label}
    </div>
    <div className="flex flex-col grow shrink-0 rounded-3xl basis-0 w-fit">
      <div className="flex flex-col justify-center items-start px-2 py-1 rounded-3xl bg-white max-md:pr-5">
        <div className="flex shrink-0 rounded-3xl h-[21px] w-[87px] bg-yellow-400" />
      </div>
    </div>
  </div>
);

export default StatBar;