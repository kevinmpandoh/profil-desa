// app/api/sejarah/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("sejarah_desa")
    .select("*")
    .single(); // karena hanya satu sejarah

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const supabase = await createClient();
  const { konten, gambar } = await req.json();

  const { error } = await supabase
    .from("sejarah_desa")
    .update({ konten, image_url: gambar })
    .eq("id", 1); // diasumsikan ID selalu 1

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: "Berhasil diperbarui" }, { status: 200 });
}
