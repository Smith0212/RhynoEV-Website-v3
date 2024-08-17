import * as React from "react";

function FooterNew() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 justify-between self-center px-5 w-full max-w-[1229px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex overflow-hidden relative flex-col justify-center items-center max-w-full aspect-[2.61] w-[235px]">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="..."
              className="w-full aspect-[2.63]"
            />
          </div>
          <div className="flex gap-5 justify-between mt-14 max-md:mt-10">
            <div className="flex gap-4">
              <div className="flex overflow-hidden relative flex-col justify-center items-center w-6 aspect-square">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e125e873c698e0623af1c1449a551f7511863aba5f08f9820a82dfbeb791b3e?"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e125e873c698e0623af1c1449a551f7511863aba5f08f9820a82dfbeb791b3e?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="flex-auto my-auto text-base tracking-wider leading-6 text-justify text-white capitalize">
                +91 9023 9875 28
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex overflow-hidden relative flex-col justify-center items-center w-6 aspect-square">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb69222e5d61cc9af49db599119f82cf468dabe5fcbe71dc5eae2b9cfdf0db3?"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb69222e5d61cc9af49db599119f82cf468dabe5fcbe71dc5eae2b9cfdf0db3?"
                  className="aspect-square"
                />
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 text-justify text-white capitalize">
                info@Rhyno.in
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 mt-8">
            <div className="flex overflow-hidden relative flex-col justify-center items-center my-auto w-6 aspect-square">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3867ebf889624d9e7a83e8b0cafff7e6a3ac007517fdb75ace3b7414ec945e86?"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3867ebf889624d9e7a83e8b0cafff7e6a3ac007517fdb75ace3b7414ec945e86?"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex-auto text-base tracking-normal leading-5 text-white capitalize">
              Rhyno Wheels Private Limited , <br />
              UG Hostel Gate 2 , Behind PDEU , Raisan , Gandhinagar , Gujarat{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col self-end mt-16 text-sm text-white max-md:mt-10">
          <div className="text-lg font-bold">Company</div>
          <div className="mt-9">FAQ</div>
          <div className="mt-6">Careers</div>
          <div className="mt-6">Products</div>
          <div className="mt-6">Contact Us</div>
        </div>
        <div className="flex flex-col my-auto">
          <div className="flex overflow-hidden relative flex-col justify-center items-center self-end aspect-square w-[34px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44077e3028dd840391b275106a4ca4aa967b355ad2a30ca8b07abee951dd0a10?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44077e3028dd840391b275106a4ca4aa967b355ad2a30ca8b07abee951dd0a10?"
              className="w-full aspect-square"
            />
          </div>
          <div className="self-start mt-10 ml-2.5 text-lg font-bold text-center text-white">
            Subscribe
          </div>
          <div className="flex flex-col justify-center mt-7 text-sm leading-6 whitespace-nowrap bg-white border border-solid border-zinc-400 text-zinc-400">
            <div className="justify-center items-start px-2.5 py-3.5 bg-white border border-solid border-zinc-400 max-md:pr-5">
              Email
            </div>
          </div>
          <div className="flex flex-col justify-center mt-5 text-sm text-center text-black whitespace-nowrap bg-yellow-500">
            <div className="justify-center items-center px-7 py-1.5 bg-yellow-500 max-md:px-5">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full bg-white border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="z-10 w-full bg-white border border-white border-solid min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 self-center px-5 mt-9 w-full text-white max-w-[1142px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-xs font-light">
          © 2021 All Rights Reserved
        </div>
        <div className="flex flex-col justify-center text-sm max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-wrap">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Sales and Refunds</div>
            <div>Legal</div>
            <div>Site Map</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
