import api from "@/lib/axios";
import axios from "axios";

export async function uploadImage(imageFile: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", imageFile);

  try {
    const response = await axios.post("/api/upload", formData);
    return response.data.url; // public URL dari Supabase
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
}

export async function deleteImage(imageUrl: string) {
  console.log("Deleting image:", imageUrl);
  try {
    const res = await api.delete("/upload", {
      data: { url: imageUrl },
    });
    return res.data.url; // public URL dari Supabase
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
}
