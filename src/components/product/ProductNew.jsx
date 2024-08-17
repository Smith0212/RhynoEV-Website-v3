import * as React from "react";

function ProductNew() {
  return (
    <div className="flex flex-col pb-8">
      <div className="flex z-10 flex-col self-end px-5 max-w-full text-white w-[689px]">
        <div className="text-5xl font-semibold leading-[56.87px] tracking-[3.76px] max-md:max-w-full max-md:text-4xl">
          GTX{" "}
        </div>
        <div className="shrink-0 mt-5 bg-white border-white border-solid border-[5px] h-[5px] max-md:max-w-full" />
        <div className="mt-6 text-xs tracking-wider leading-5 text-justify max-md:max-w-full">
          Indulge in the perfect harmony of power and range with this Rhyno.
          Offering an exhilarating experience with its robust 2000W motor, it
          ensures a thrilling ride while still delivering an impressive 80-100
          km range on a single charge. Like its counterparts, this machine
          features the safety assurance of a fire-safe advanced LFP battery,
          along with the comprehensive benefits of owning a Rhino. Boasting a
          formidable combination of a 2000W motor and a 2.7kWh battery, this
          beast is ready to roar on the roads, providing an electrifying journey
          at every turn. Check out the other details below!
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-0 max-w-full aspect-[1.39] w-[531px]"
      />
      <div className="flex z-10 flex-col self-end -mt-36 max-w-full w-[654px] max-md:mr-2.5">
        <div className="flex flex-col ml-7 w-px max-md:ml-2.5">
          <div className="shrink-0 h-9 bg-white border border-white border-solid" />
          <div className="shrink-0 mt-8 bg-white border border-white border-solid h-[94px]" />
        </div>
        <div className="z-10 mt-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-sm font-medium text-white tracking-[2.8px] max-md:mt-10">
                <div>BATTERY</div>
                <div className="mt-3.5 font-light">2.7 KWH</div>
                <div className="mt-9">BATTERY FEATURES</div>
                <div className="mt-6 font-light leading-4">
                  LFP WITH 1500 CYCLES
                  <br />
                  ACTIVE BALANCIG
                  <br />
                  WATERPROOF ( IP67 )
                </div>
                <div className="mt-11 max-md:mt-10">BATTERY WARRANTY</div>
                <div className="mt-5 font-light">3 YEARS</div>
                <div className="mt-9">CHARGING TIME</div>
                <div className="mt-4 font-light">4 HOURS ( 12 A )</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start max-md:mt-10">
                <div className="flex flex-col ml-4 text-sm text-white tracking-[2.8px] max-md:ml-2.5">
                  <div className="font-medium">MOTOR</div>
                  <div className="mt-3.5 font-light">1500 W</div>
                </div>
                <div className="flex gap-4 self-stretch mt-9 text-sm text-white tracking-[2.8px]">
                  <div className="shrink-0 self-end mt-16 w-px bg-white border border-white border-solid h-[127px] max-md:mt-10" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-5">
                      <div className="flex flex-col grow shrink-0 font-medium basis-0 w-fit">
                        <div>MAX SPEED</div>
                        <div className="mt-3.5 font-light">55 KM/H</div>
                        <div className="mt-8">WARRANTY ON ELECTRONCS</div>
                        <div className="mt-7">MAX RANGE ( @30KM/H )</div>
                        <div className="mt-7">MAX RANGE ( @45KM/H )</div>
                      </div>
                      <div className="flex flex-col self-end mt-16 font-light max-md:mt-10">
                        <div>1 YEAR</div>
                        <div className="mt-7">150 KM</div>
                        <div className="mt-8">110 KM</div>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <div className="flex-auto font-medium">
                        MAX RANGE ( @FULL SPEED )
                      </div>
                      <div className="font-light">90 KM</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-9">
                  <div className="shrink-0 w-px bg-white border border-white border-solid h-[50px]" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-white uppercase tracking-[2.8px]">
                      color options
                    </div>
                    <div className="flex gap-3.5 mt-4">
                      <div className="shrink-0 w-6 h-6 bg-black" />
                      <div className="shrink-0 w-6 h-6 bg-blue-700" />
                      <div className="shrink-0 w-6 h-6 bg-red-600" />
                      <div className="shrink-0 w-6 h-6 bg-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 gap-5 justify-between mt-0 ml-6 max-w-full w-[564px] max-md:flex-wrap">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 aspect-[0.57] w-[72px]"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 max-w-full aspect-[0.83] w-[106px]"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 my-auto max-w-full aspect-[1.41] w-[150px]"
        />
        <div className="flex flex-col my-auto">
          <div className="shrink-0 bg-white border border-white border-solid h-[38px]" />
          <div className="shrink-0 mt-9 bg-white border border-white border-solid h-[38px]" />
        </div>
      </div>
    </div>
  );
}


export default ProductNew;