import api from "@/lib/axios";

export interface PotensiDesaPayload {
  id?: string;
  judul: string;
  deskripsi: string;
  image_url: string;
}

const get = async () => {
  const response = await api.get("/potensi-desa");
  return response.data.data; // ambil hanya data
};

const create = async (payload: PotensiDesaPayload) => {
  const response = await api.post("/potensi-desa", payload);
  return response.data;
};

const update = async (id: string, payload: PotensiDesaPayload) => {
  const response = await api.put(`/potensi-desa/${id}`, payload);
  return response.data;
};

const remove = async (id: string) => {
  const response = await api.delete(`/potensi-desa/${id}`);
  return response.data;
};

export default {
  get,
  create,
  update,
  remove,
};
