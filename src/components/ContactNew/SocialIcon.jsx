import React from 'react';

function SocialIcon() {
  return (
    <div className="flex relative flex-col items-center self-center px-6 mt-32 ml-7 max-w-full aspect-[5.304] w-[122px] max-md:px-5 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3396ec5a18abad0591b72fbe1b994b5bb3b667dab3c7dae29cfabd142bed07e?apiKey=f89f39f60597486480f34f2d72b9a02b&&apiKey=f89f39f60597486480f34f2d72b9a02b" alt="" className="object-cover absolute inset-0 size-full" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7115b7f6143e9dca2baedcdf7bcf2a45ed9c19c9921b9855602349e587bcf5b9?apiKey=f89f39f60597486480f34f2d72b9a02b&&apiKey=f89f39f60597486480f34f2d72b9a02b" alt="Social media icon" className="object-contain aspect-[0.96] w-[22px]" />
    </div>
  );
}

export default SocialIcon;