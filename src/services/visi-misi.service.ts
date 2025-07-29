import api from "@/lib/axios";

const get = async () => {
  const response = await api.get("/visi-misi");
  return response.data.data;
};

const update = async (payload: { visi: string; misi: string }) => {
  const response = await api.put("/visi-misi", payload);
  return response.data;
};

export default {
  get,
  update,
};
