import api from "@/lib/axios";

export interface PotensiDesaPayload {
  id?: string;
  judul: string;
  deskripsi: string;
  image_url: string;
}

const get = async () => {
  const response = await api.get("/galeri");
  return response.data.data; // ambil hanya data
};

const create = async (payload: PotensiDesaPayload) => {
  const response = await api.post("/galeri", payload);
  return response.data;
};

const update = async (id: string, payload: PotensiDesaPayload) => {
  const response = await api.put(`/galeri/${id}`, payload);
  return response.data;
};

const remove = async (id: string) => {
  const response = await api.delete(`/galeri/${id}`);
  return response.data;
};

export default {
  get,
  create,
  update,
  remove,
};
