import Navbar from "@/components/Navbar";
import Link from "next/link";
import MainSlide from "@/components/MainSlide";

export default function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <div className="position-absolute bottom-0 end-50">
        <MainSlide />
      </div>
      
      <Link href="/login">Login</Link>
    </div>
  );
}
