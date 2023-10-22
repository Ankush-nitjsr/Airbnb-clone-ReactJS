import React from "react";

const Prefooter = () => {
  return (
    <div className="space-y-[32px] mx-[80px] my-[96px]">
      <h1 className="text-3xl mb-[16px]">Inspiration for future getaways</h1>
      <div className="flex space-between text-[#6B7280] border-b pb-4 ">
        <ul className="space-x-[32px]">
          <li className="inline hover:text-black">
            Destinations for arts & culture
          </li>
          <li className="inline hover:text-black">
            Destinations for outdoor adventure
          </li>
          <li className="inline hover:text-black">Mountain cabins</li>
          <li className="inline hover:text-black">Beach destinations</li>
          <li className="inline hover:text-black">Popular destinations</li>
          <li className="inline hover:text-black">Unique Stays</li>
        </ul>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 text-sm ">
        <div>
          <p>Phoenix</p>
          <p className="text-[#6B7280]">Arizona</p>
        </div>
        <div>
          <p>San Francisco</p>
          <p className="text-[#6B7280]">California</p>
        </div>
        <div>
          <p>Keswick</p>
          <p className="text-[#6B7280]">England</p>
        </div>
        <div>
          <p>Hot Springs</p>
          <p className="text-[#6B7280]">Arkansas</p>
        </div>
        <div>
          <p>Barcelona</p>
          <p className="text-[#6B7280]">California</p>
        </div>
        <div>
          <p>London</p>
          <p className="text-[#6B7280]">England</p>
        </div>
        <div>
          <p>Los Angeles</p>
          <p className="text-[#6B7280]">California</p>
        </div>
        <div>
          <p>Prague</p>
          <p className="text-[#6B7280]">Czechia</p>
        </div>
        <div>
          <p>Scarborough</p>
          <p className="text-[#6B7280]">England</p>
        </div>
        <div>
          <p>San Diego</p>
          <p className="text-[#6B7280]">California</p>
        </div>
        <div>
          <p>Washington</p>
          <p className="text-[#6B7280]">District of Columbia</p>
        </div>
        <div>
          <p>Show more</p>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
