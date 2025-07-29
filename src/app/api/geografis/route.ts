import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("geografis").select("*").single(); // karena hanya satu sejarah

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const supabase = await createClient();
  const body = await req.json();

  const {
    deskripsi,
    luas_wilayah,
    batas_utara,
    batas_selatan,
    batas_timur,
    batas_barat,
  } = body;

  const { data, error } = await supabase
    .from("geografis")
    .update({
      deskripsi,
      luas_wilayah,
      batas_utara,
      batas_selatan,
      batas_timur,
      batas_barat,
    })
    .eq("id", body.id) // pastikan body mengandung ID
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { message: "Gagal mengupdate data", error },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
