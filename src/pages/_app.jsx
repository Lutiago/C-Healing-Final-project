import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </SessionContextProvider>
    </QueryClientProvider>
  );
}
