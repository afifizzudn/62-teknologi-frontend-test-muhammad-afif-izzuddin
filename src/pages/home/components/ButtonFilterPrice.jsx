import React from "react";

export const ButtonFilterPrice = ({ active, onChange }) => {
  const setFilterPrice = (priceLevel) => {
    console.log("setFilterPrice", priceLevel);
    if (active === priceLevel) {
      onChange(0);
    } else {
      onChange(priceLevel);
    }
  };

  return (
    <div className='grid min-h-[60px] w-full place-items-center overflow-x-scroll rounded-lg px-6 lg:overflow-visible'>
      <div className='flex w-full divide-x divide-gray-100 row'>
        <button
          onClick={() => setFilterPrice(1)}
          className={`${
            active === 1
              ? "bg-gray-900 text-white "
              : " bg-[#fcfdfc] text-gray-900"
          } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 block w-full rounded-r-none border-r-0 border`}
          type='button'>
          $
        </button>
        <button
          onClick={() => setFilterPrice(2)}
          className={`${
            active === 2
              ? "bg-gray-900 text-white "
              : " bg-[#fcfdfc] text-gray-900"
          } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 block w-full rounded-r-none border-r-0 border rounded-l-none`}
          type='button'>
          $$
        </button>
        <button
          onClick={() => setFilterPrice(3)}
          className={`${
            active === 3
              ? "bg-gray-900 text-white "
              : " bg-[#fcfdfc] text-gray-900"
          } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 block w-full rounded-r-none border-r-0 border rounded-l-none`}
          type='button'>
          $$$
        </button>
        <button
          onClick={() => setFilterPrice(4)}
          className={`${
            active === 4
              ? "bg-gray-900 text-white "
              : " bg-[#fcfdfc] text-gray-900"
          } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 block w-full border rounded-l-none`}
          type='button'>
          $$$$
        </button>
      </div>
    </div>
  );
};
