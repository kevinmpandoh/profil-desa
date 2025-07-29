import api from "@/lib/axios";

const get = async () => {
  const res = await api.get("/dashboard");
  return res.data;
};

export default {
  get,
};
