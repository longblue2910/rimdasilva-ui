import React from "react";

const Hero = () => {
  return (
    <div className="h-cal[100vh-13vh] w-full flex justify-center flex-col">
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Text content */}
        <div className="col-span-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold">
            Buy, Sell and collect NFTs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            saepe possimus quidem nostrum? Laudantium maxime officia error eum
            tempora? Accusantium fugit qui velit maxime ut, eum dolores dolorum
            obcaecati sapiente!
          </p>
        </div>
        {/* Image */}
      </div>
    </div>
  );
};

export default Hero;
