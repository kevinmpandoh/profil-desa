// app/api/visi-misi/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("visi_misi").select("*").single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const supabase = await createClient();
  const body = await req.json();
  const { visi, misi } = body;

  const { error } = await supabase
    .from("visi_misi")
    .update({ visi, misi })
    .eq("id", 1); // pastikan id row yang ingin diperbarui (misal id = 1)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Berhasil diperbarui" }, { status: 200 });
}
