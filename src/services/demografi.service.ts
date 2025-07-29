import api from "@/lib/axios";

const get = async () => {
  const res = await api.get("/demografi");
  return res.data;
};
const post = async (data: any) => {
  const res = await api.post("/demografi", data);
  return res.data;
};

export default {
  get,
  post,
};
