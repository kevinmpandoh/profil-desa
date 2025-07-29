// app/api/user/[id]/route.ts

import { supabaseAdmin } from "@/utils/supabase/admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, context: any) {
  const { params } = context;
  const { error } = await supabaseAdmin.auth.admin.deleteUser(params.id);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "User deleted" });
}

export async function PUT(req: Request, context: any) {
  const { params } = context;
  const { name, role } = await req.json();
  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
    params.id,
    {
      user_metadata: {
        name,
        role,
      },
    }
  );

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "User updated", user: data.user });
}
