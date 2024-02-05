import { api } from "../../../lib/axios";

const getBusinessDetail = (params) => {
  const { alias } = params;
  const path = `/businesses/${alias}`;

  return api.get(path);
};

export default getBusinessDetail;
