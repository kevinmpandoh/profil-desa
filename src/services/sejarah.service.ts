// services/sejarah.service.ts
import { createClient } from "@/utils/supabase/client";

// src/services/sejarah.service.ts
import api from "@/lib/axios";

const get = async () => {
  const response = await api.get("/sejarah");
  return response.data.data; // ambil hanya data
};

const update = async (payload: { konten: string; gambar: string | null }) => {
  const response = await api.put("/sejarah", payload);
  return response.data;
};

export default {
  get,
  update,
};

// export const upsertSejarah = async (konten: string) => {
//   const supabase = await createClient();
//   return await supabase.from("sejarah-desa").upsert([{ konten }]);
// };

// export const deleteSejarah = async (id: number) => {
//   const supabase = await createClient();
//   return await supabase.from("sejarah-desa").delete().eq("id", id);
// };
