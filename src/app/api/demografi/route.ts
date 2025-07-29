// app/api/demografi/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("demografi")
    .select("*")
    .order("wilayah", { ascending: true });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const body = await req.json();

  const { error } = await supabase
    .from("demografi")
    .delete()
    .neq("wilayah", "");

  if (error) {
    return NextResponse.json(
      { message: "Gagal menghapus data lama" },
      { status: 500 }
    );
  }

  const { error: insertError } = await supabase.from("demografi").insert(body);

  if (insertError) {
    return NextResponse.json(
      { message: "Gagal menyimpan data baru" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Berhasil" });
}
