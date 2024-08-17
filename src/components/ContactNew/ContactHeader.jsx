import React from 'react';

function ContactHeader() {
  return (
    <header className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-start px-20 py-96 uppercase min-h-[1024px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/674887ccab96bca9d3be80da667b35c0e859f5966f199088972825e59948fc61?apiKey=f89f39f60597486480f34f2d72b9a02b&&apiKey=f89f39f60597486480f34f2d72b9a02b" alt="" className="object-cover absolute inset-0 size-full" />
        <h2 className="relative text-3xl tracking-wider leading-9 text-yellow-300">
          write to in case <br /> of any query
        </h2>
        <h1 className="relative mt-9 text-6xl font-bold tracking-widest text-right text-white leading-[57px] max-md:text-4xl max-md:leading-10">
          contact <br /> us
        </h1>
        <div className="relative z-10 shrink-0 -mt-1.5 h-0.5 w-[229px] bg-yellow-300" />
      </div>
    </header>
  );
}

export default ContactHeader;