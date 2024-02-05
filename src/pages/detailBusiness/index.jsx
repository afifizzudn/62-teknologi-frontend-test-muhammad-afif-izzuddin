import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import getBusinessDetail from "./api/getBusinessDetail";

const DetailBusiness = () => {
  let { alias } = useParams();
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["detailBusiness", alias],
    queryFn: async () => {
      const res = await getBusinessDetail({
        alias,
      });
      return res?.data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className='relative mb-8 h-full w-full bg-white'>
      <Navbar />
      <div>Detail Page with Alias:{alias}</div>
      {isLoading | isFetching ? (
        <div>Loading...</div>
      ) : (
        <div>{JSON.stringify(data)}</div>
      )}

      <Button onClick={goHome}>Back Home</Button>
    </div>
  );
};

export default DetailBusiness;
