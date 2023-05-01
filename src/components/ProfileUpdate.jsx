import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

export const ProfileUpdate = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const getProvider = async () => {
    let { data: provider, error } = await supabase
      .from("Providers")
      .select("*")
      .eq("user_id", user.id)
      .single();
    return provider;
  };
  const { data } = useQuery({
    queryKey: ["provider"],
    queryFn: getProvider,
    enabled: !!user,
  });
  return <div>Profile update:{data && data.name}</div>;
};
