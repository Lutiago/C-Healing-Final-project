import { useSecurePage } from "@/lib/useSecurePage";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";


const Dashboard = () => {
  useSecurePage();
  const supabase = useSupabaseClient();

  return (
    
    <div className="text-center bs-secondary-bg">
      <button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
