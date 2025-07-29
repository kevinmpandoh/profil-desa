import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const { params } = context;
  const supabase = await createClient();
  const body = await req.json();
  const { keterangan, foto: image_url } = body;

  const { error } = await supabase
    .from("layanan_publik")
    .update({ keterangan, image_url })
    .eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Berhasil diperbarui" });
}

export async function DELETE(_: NextRequest, context: any) {
  const { params } = context;

  const supabase = await createClient();
  const { error } = await supabase
    .from("layanan_publik")
    .delete()
    .eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Berhasil dihapus" });
}
