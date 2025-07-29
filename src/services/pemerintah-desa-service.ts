import api from "@/lib/axios";

export const getPemerintahDesa = async () => {
  const res = await api.get("/pemerintah-desa");
  return res.data.data;
};

export const createPemerintahDesa = async (data: any) => {
  const res = await api.post("/pemerintah-desa", data);
  return res.data;
};

export const updatePemerintahDesa = async (id: string, data: any) => {
  const res = await api.put(`/pemerintah-desa/${id}`, data);
  return res.data;
};

export const deletePemerintahDesa = async (id: string) => {
  const res = await api.delete(`/pemerintah-desa/${id}`);
  return res.data;
};
