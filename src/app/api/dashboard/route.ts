import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  const { data: demografi, error } = await supabase
    .from("demografi")
    .select("*")
    .order("wilayah", { ascending: true });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  const galeri = await supabase
    .from("galeri")
    .select("*")
    .order("created_at", { ascending: false });

  if (galeri.error)
    return NextResponse.json({ error: galeri.error.message }, { status: 500 });
  const potensi_desa = await supabase
    .from("potensi_desa")
    .select("*")
    .order("created_at", { ascending: false });

  if (potensi_desa.error)
    return NextResponse.json(
      { error: potensi_desa.error.message },
      { status: 500 }
    );

  const perangkat_desa = await supabase
    .from("perangkat_desa")
    .select("*")
    .order("created_at", { ascending: false });

  if (perangkat_desa.error)
    return NextResponse.json(
      { error: perangkat_desa.error.message },
      { status: 500 }
    );

  const totalL =
    demografi.reduce((acc: any, cur: any) => acc + cur.laki_laki, 0) || 0;
  const totalP =
    demografi.reduce((acc: any, cur: any) => acc + cur.perempuan, 0) || 0;
  const totalPenduduk = totalL + totalP;

  return NextResponse.json({
    perangkat_desa: perangkat_desa.data.length || 0,
    potensi_desa: potensi_desa.data.length || 0,
    galeri_desa: galeri.data.length || 0,
    penduduk: {
      laki_laki: totalL,
      perempuan: totalP,
      jumlah: totalPenduduk,
    },
  });
}
