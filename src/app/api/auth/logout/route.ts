import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();

  // Sign out user (menghapus token dari Supabase dan cookie)
  const { error } = await supabase.auth.signOut();

  if (error) {
    return NextResponse.json(
      { message: "Gagal logout", error: error.message },
      { status: 500 }
    );
  }

  const res = NextResponse.json({ message: "Logout berhasil" });
  res.cookies.set("access_token", "", { maxAge: 0 });
  res.cookies.set("refresh_token", "", { maxAge: 0 });

  return res;
}
