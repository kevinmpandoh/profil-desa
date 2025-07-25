import axios from "@/lib/axios"; // asumsi axios instance

export interface Sejarah {
  id: string;
  gambar_url: string;
  isi: string;
}

export const getSejarah = async (): Promise<Sejarah | null> => {
  console.log("Fetching sejarah desa...");
  // Simulasi dummy data
  return {
    id: "1",
    gambar_url: "https://source.unsplash.com/400x200/?village",
    isi: "<p>Ini adalah sejarah desa yang panjang dan lengkap...</p>",
  };
};
export const createSejarah = (data: any) => axios.post("/sejarah", data);
export const updateSejarah = (id: string, data: any) =>
  axios.put(`/sejarah/${id}`, data);
export const deleteSejarah = async (id: string) => {
  console.log("Menghapus sejarah dengan ID:", id);
  return { success: true };
};
