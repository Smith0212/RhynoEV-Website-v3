import React from 'react';

const VehicleStats = ({ stats }) => (
  <section className="max-w-[800px]">
    <div className="flex gap-5 max-md:flex-col">
      {/* Stats labels and progress bars */}
      <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-10 mt-14 max-md:mt-10 max-md:mr-1.5">
              {/* Stat Label */}
              <div className="my-auto text-xl font-bold tracking-widest text-white">
                {stat.label}
              </div>
              {/* Progress Bar */}
              <div className="flex flex-col grow shrink-0 rounded-3xl basis-0 w-[500px] items-end">
                <div className="flex flex-col justify-center items-start px-2 py-1 rounded-3xl bg-gray-700 w-full">
                  <div
                    className="flex shrink-0 rounded-3xl h-[14px] bg-yellow-400" // Slimmer bar height
                    style={{ width: `${stat.progress}%` }} // Dynamic width based on stat.progress
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VehicleStats;
