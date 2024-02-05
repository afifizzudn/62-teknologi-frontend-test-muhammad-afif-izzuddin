import React from "react";
import Rating from "./Rating";
import { FiArrowRightCircle } from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";

const CardBusiness = () => {
  return (
    <div className='flex border-2 border-gray-400 rounded w-full h-60 p-4 cursor-pointer hover:bg-yellow-100'>
      <div className='w-[200px] h-[200px] border border-blue-300 rounded mr-4'>
        Image
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-xl font-bold'>Resto A</div>
        <div className='flex gap-2 items-center justify-center'>
          <Rating />
          <div className='font-md text-yellow-800'>4.4</div>
          <div className='text-md text-gray-400'>(99 reviews)</div>
          <FiArrowRightCircle className='cursor-pointer' />
        </div>
        <div className='flex gap-2 items-center'>
          <div className='bg-blue-300 px-1 rounded text-sm font-medium'>
            Asian
          </div>
          <div className='bg-blue-300 px-1 rounded text-sm font-medium'>
            Noodles
          </div>
          <div className='bg-blue-300 px-1 rounded text-sm font-medium'>
            Dry
          </div>
          <div className='text-sm'>$$$</div>
        </div>
        <div className='text-md'>
          <span className='text-green-700 font-medium'>Open</span> until 10.00
          PM
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <PiMapPinBold />
          <p className='font-light text-sm'>981 W Grove St, Boise, ID 83702</p>
        </div>
      </div>
    </div>
  );
};

export default CardBusiness;
