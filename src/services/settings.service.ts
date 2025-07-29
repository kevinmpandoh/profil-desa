import api from "@/lib/axios";

export async function getSettings() {
  const response = await api.get("/settings");
  return response.data; // ambil hanya data
  //   const supabase = await createClient();

  //   const { data, error } = await supabase
  //     .from("settings")
  //     .select("*")
  //     .limit(1)
  //     .single();

  //   if (error) throw new Error(error.message);
  //   return data;
}

export async function updateSettings(values: any) {
  const response = await api.put("/settings", values);
  return response.data; // ambil hanya data
  //   const supabase = await createClient();

  //   const { error } = await supabase
  //     .from("settings")
  //     .update(values)
  //     .eq("id", values.id || (await getSettings()).id);

  //   if (error) throw new Error(error.message);
}
