import { useSecurePage } from "@/lib/useSecurePage";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { ProviderProfile } from "@/components/ProviderProfile";

const Dashboard = () => {
  useSecurePage();
  const supabase = useSupabaseClient();

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="text-center bs-secondary-bg">
      <button onClick={handleLogout}>Log out</button>
      <div className="container">
        <div className="text-center bs-secondary-bg">
          <ProviderProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
