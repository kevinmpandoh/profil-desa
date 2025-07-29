// app/auth/login/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const supabase = await createClient();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email dan password wajib diisi" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.code === "invalid_credentials") {
      return NextResponse.json(
        { message: "Email atau password salah" },
        {
          status: 401,
        }
      );
    }
    return NextResponse.json(
      { message: error.message },
      {
        status: 401,
      }
    );
  }

  const user = data.user;

  return NextResponse.json({
    message: "Login sukses",
    data: {
      id: user.id,
      email: user.email,
      name: user.user_metadata.name || "Tanpa Nama",
      avatar_url: "/profile-default.png", // Ganti dengan URL default jika tidak ada
    },
  });
}
