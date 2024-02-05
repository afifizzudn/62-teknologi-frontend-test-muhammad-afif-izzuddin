import React from "react";
import { PiMapPinBold, PiPhoneBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Chip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const CardBusiness = ({ data }) => {
  const navigate = useNavigate();
  const navigateToDetail = () => navigate(`/detail/${data?.alias}`)
  return (
    <div className='flex border-[1.5px] bg-[#fcfdfc] border-b-gray-200 rounded-lg w-full h-60 p-4 cursor-pointer hover:shadow-lg'>
      <div className='w-[200px] min-h-[200px] border-[1.5px] border-gray-100 rounded-xl mr-4 object-cover'>
        <LazyLoadImage
          alt={data?.name}
          width={'100%'}
          height={'100%'}
          src={data?.image_url}
          effect='blur'
          wrapperProps={{
            style: { transitionDelay: "1s", borderRadius: "25px" },
          }}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>{data?.name}</div>
        <div className='flex gap-2 items-center'>
          {/* <Rating value={Math.floor(data?.rating)} readonly /> */}
          <FaStar className='text-yellow-800 text-lg' />
          <div className='text-md text-yellow-800'>{data?.rating}</div>
          <div className='text-sm text-gray-400'>
            ({data?.review_count} reviews)
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          {data?.categories?.map((category, index) => (
           <Chip key={index} variant="ghost" value={category?.title} />
          ))}

          <div className='text-sm'>{data?.price}</div>
        </div>
        {/* <div className='text-md'>
          <span className='text-green-700 font-medium'>Open</span> until 10.00
          PM
        </div> */}
        <div className='flex flex-row gap-2 items-center'>
          <PiMapPinBold />
          <p className='font-light text-sm'>
            {data?.location?.display_address.toString()}
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <PiPhoneBold />
          <p className='font-light text-sm'>{data?.display_phone}</p>
        </div>
        <button
          onClick={navigateToDetail}
          className='flex items-center gap-2 w-fit py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
          type='button'>
          See Detail
          <RxDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CardBusiness;
