import { api } from "../../../lib/axios";

const getBusinessSearch = (params) => {
    const path = `/businesses/search`;

    const {location, sort_by, offset, limit=5, price, latitude, longitude } = params;
    let pathParam = "?";
    if (location) pathParam += `&location=${location}`;
    if (limit) pathParam += `&limit=${limit}`;
    if (sort_by) pathParam += `&sort_by=${sort_by}`;
    if (offset) pathParam += `&offset=${offset}`;
    if (price) pathParam += `&price=${price}`;
    if (latitude) pathParam += `&latitude=${latitude}`;
    if (longitude) pathParam += `&longitude=${longitude}`;
  
    return api.get(pathParam === "?" ? path : path + pathParam);
}

export default getBusinessSearch;