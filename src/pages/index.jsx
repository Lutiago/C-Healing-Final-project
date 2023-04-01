
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
    
      <h1>Welcome </h1>
      <Navbar />
      <Link href="/login">Login</Link>
    </div>
  );
}
