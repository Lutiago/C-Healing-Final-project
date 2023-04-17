import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Home() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const returnPath = router.query.ret?.toString();

  useEffect(() => {
    if (user) {
      router.replace(returnPath || "/dashboard");
    }
  }, [user, router, returnPath]);

  if (!user) {
    return (
      <div className="row g-3 justify-content-md-center mb-3">
        <div className="col-md-4">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </div>
    );
  }

  return null;
}
