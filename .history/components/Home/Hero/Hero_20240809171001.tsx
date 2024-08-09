import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-13vh)] w-full flex justify-center flex-col">
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Text content */}
        <div className="col-span-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold">
            Buy, Sell and collect NFTs
          </h1>
          <p className="text-sm md:text-[17px] text-gray-600 text-opacity-80 mt-4 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            assumenda fugit. At labore eum commodi quos asperiores ducimus ad
            voluptatem?
          </p>
          <div className="flex items-center space-x-2 mt-10">
            <button className="w-36 rounded-full py-3 px-8 text-center bg-blue-700 font-semibold text-w">
              Upload
            </button>
            <button>Explore</button>
          </div>
        </div>
        {/* Image */}
      </div>
    </div>
  );
};

export default Hero;
