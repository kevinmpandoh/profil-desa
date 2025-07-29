import api from "@/lib/axios";

export interface GeografisPayload {
  id?: string;
  deskripsi: string;
  luas_wilayah: string;
  batas_utara: string;
  batas_selatan: string;
  batas_timur: string;
  batas_barat: string;
  //   map_embed_url: string;
}

const get = async () => {
  const response = await api.get("/geografis");
  return response.data.data; // ambil hanya data
};

const update = async (payload: GeografisPayload) => {
  const response = await api.put("/geografis", payload);
  return response.data;
};

export default {
  get,
  update,
};
