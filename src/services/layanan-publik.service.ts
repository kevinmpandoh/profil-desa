import api from "@/lib/axios";

export interface PotensiDesaPayload {
  id?: string;
  judul: string;
  deskripsi: string;
  image_url: string;
}

const get = async () => {
  const response = await api.get("/layanan-publik");
  return response.data.data; // ambil hanya data
};

const create = async (payload: PotensiDesaPayload) => {
  const response = await api.post("/layanan-publik", payload);
  return response.data;
};

const update = async (id: string, payload: PotensiDesaPayload) => {
  const response = await api.put(`/layanan-publik/${id}`, payload);
  return response.data;
};

const remove = async (id: string) => {
  const response = await api.delete(`/layanan-publik/${id}`);
  return response.data;
};

export default {
  get,
  create,
  update,
  remove,
};
