import { createClient } from "@supabase/supabase-js";

// Jangan pernah expose service_role ini ke client!
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
