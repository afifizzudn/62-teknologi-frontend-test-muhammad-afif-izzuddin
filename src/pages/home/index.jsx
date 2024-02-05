import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CardBusiness from "./components/CardBusiness";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Footer from "../../components/Footer";
import { Button, Switch } from "@material-tailwind/react";
import { ButtonFilterPrice } from "./components/ButtonFilterPrice";
import getBusinessSearch from "./api/getBusinessSearch";
import SearchInput from "./components/SearchInput";
import SkeletonCard from "./components/SkeletonCard";
import MenuWithSearchInput from "./components/MenuWithSearchInput";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(undefined);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [filterPrice, setFilterPrice] = useState(0);
  const [isNearbySearch, setIsNearbySearch] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const getGeoLocation = useCallback(() => {
    if ("geolocation" in navigator) {
      setOffset(0);
      setActivePage(1);
      setLocation(undefined);
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('masuk dalam sniiiii')
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, [isNearbySearch]);
  // useEffect(() => {
  //   if ("geolocation" in navigator && isNearbySearch) {
  //     setOffset(0);
  //     setActivePage(1);
  //     setLocation(undefined);
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setPosition({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     console.log("Geolocation is not available in your browser.");
  //   }
  // }, [isNearbySearch]);

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["business", offset, filterPrice, location, isNearbySearch],
    queryFn: async () => {
      const res = await getBusinessSearch({
        offset,
        price: filterPrice,
        location,
        sort_by: "best_match",
        latitude: position.latitude,
        longitude: position.longitude,
      });
      setTotalPages(res?.data?.total / 5);
      return res?.data;
    },
    refetchOnWindowFocus: false,
  });

  const handleFilterPrice = (e) => {
    setOffset(0);
    setActivePage(1);
    setFilterPrice(e);
  };

  const handleSearchLocation = (e) => {
    setPosition({
      latitude: null,
      longitude: null,
    });
    setIsNearbySearch(false);
    setOffset(0);
    setActivePage(1);
    setLocation(e);
  };

  const getCurrentLocation = () => {
    setIsNearbySearch(true);
    getGeoLocation()
  };
  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 5);
    setActivePage((prevActivePage) => prevActivePage + 1);
  };

  const handlePrevPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 5, 0));
    setActivePage((prevActivePage) => prevActivePage - 1);
  };

  const visiblePages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).filter((page) => Math.abs(page - Math.ceil((offset + 1) / 5)) <= 2);

  console.log(visiblePages, isError);

  console.log(
    "position : ",
    position,
    "isLoading : ",
    isLoading,
    "isFetching : ",
    isFetching,
    "total page",
    totalPages,
    "active page :",
    activePage,
    "error :",
    error?.response?.data?.error?.description,
    "location :",
    location
  );

  return (
    <div className='relative mb-8 h-full w-full bg-white'>
      <Navbar />
      <div className='px-[10%] py-6'>
        <div className='flex flex-row justify-between'>
          <h1>Welcome!</h1>
        </div>
        <div className='flex flex-row'>
          <div className='basis-1/4 flex-col h-screen w-full py-6'>
            <div className='text-lg font-bold pb-2'>Filters</div>
            <div className='flex flex-col gap-2 w-full min-h-60 rounded-xl shadow-md border'>
              <div>
                <div className='pt-2 px-6 font-medium'>Price</div>
                <ButtonFilterPrice
                  active={filterPrice}
                  onChange={(e) => handleFilterPrice(e)}
                />
              </div>
            </div>
          </div>
          <div className='basis-3/4 flex-col bg-slate-100 h-screen w-full p-6'>
            <div className=' flex flex-row w-full justify-between pb-2'>
              <div className='text-lg font-bold'>Bussiness List</div>{" "}
              <div className='flex flex-row gap-4 items-center'>
                <MenuWithSearchInput
                  onChange={(e) => handleSearchLocation(e)}
                  getNearbyLocation={getCurrentLocation}
                />
                <div className='text-lg font-bold'>
                  Location :{" "}
                  <span className='font-extralight'>
                    {isNearbySearch ? "Current Location" : location}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
              {isLoading || isFetching ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : data?.businesses.length ? (
                data?.businesses.map((item, index) => (
                  <CardBusiness data={item} key={index} />
                ))
              ) : isError ? (
                <div className='w-full text-center font-light text-md py-20'>
                  Sorry, but we didn't understand the location you entered.{" "}
                  {error?.response?.data?.error?.description}
                </div>
              ) : (
                <div className='w-full text-center font-light text-xl py-20'>
                  Sorry, no businesses found{" "}
                </div>
              )}
            </div>
            <div
              className={`${
                isLoading | isFetching | isError | (visiblePages.length < 2)
                  ? "hidden"
                  : ""
              } flex flex-row gap-4 w-full justify-center pb-8`}>
              <Button onClick={handlePrevPage} disabled={offset === 0}>
                Previous Page
              </Button>
              {visiblePages.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => {
                    setOffset((pageNumber - 1) * 5);
                    setActivePage(pageNumber);
                  }}>
                  <div
                    className={`p-2 rounded-full text-white text-sm ${
                      pageNumber === activePage
                        ? "bg-blue-gray-500"
                        : "bg-blue-gray-100"
                    }`}>
                    {pageNumber}
                  </div>
                </button>
              ))}
              <Button onClick={handleNextPage}>Next Page</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
