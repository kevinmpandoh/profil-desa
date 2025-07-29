import api from "@/lib/axios";

export interface PotensiDesaPayload {
  id?: string;
  judul: string;
  deskripsi: string;
  image_url: string;
}

const get = async () => {
  const response = await api.get("/users");
  return response.data; // ambil hanya data
};

const create = async (payload: PotensiDesaPayload) => {
  const response = await api.post("/users", payload);
  return response.data;
};

const update = async (id: string, payload: PotensiDesaPayload) => {
  const response = await api.put(`/users/${id}`, payload);
  return response.data;
};

const remove = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export default {
  get,
  create,
  update,
  remove,
};
