import Navbar from "@/components/Navbar";
import Link from "next/link";
import MainSlide from "@/components/MainSlide";
import { Insurance } from "@/components/Insurance";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <div className="pt-10">
        <MainSlide />
      </div>
      <Insurance />
      <Footer />
      <Link href="/login">Login</Link>
    </div>
  );
}
