import { createClient } from "@/utils/supabase/server";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { error: "File tidak ditemukan" },
      { status: 400 }
    );
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const fileName = `gambar/${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("profil-desa")
    .upload(fileName, fileBuffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from("profil-desa").getPublicUrl(fileName);

  return NextResponse.json({ url: data.publicUrl }, { status: 200 });
}
export async function DELETE(req: NextRequest) {
  const supabase = await createClient();

  const body = await req.json();
  const { url } = body;

  if (!url) {
    return NextResponse.json(
      { error: "URL file tidak ditemukan" },
      { status: 400 }
    );
  }

  const fileName = url.split("/").pop();
  if (!fileName) {
    return NextResponse.json(
      { error: "Nama file tidak ditemukan" },
      { status: 400 }
    );
  }
  const { error } = await supabase.storage
    .from("profil-desa")
    .remove([fileName]);

  if (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from("profil-desa").getPublicUrl(fileName);

  return NextResponse.json({ url: data.publicUrl }, { status: 200 });
}
