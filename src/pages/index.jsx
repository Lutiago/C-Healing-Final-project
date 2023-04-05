import Link from "next/link";
import MainSlide from "@/components/MainSlide";
import { Insurance } from "@/components/Insurance";
import { FormMain } from "@/components/FormMain";

export default function Home() {
  return (
    <div className="text-center">
      <div className="pt-10">
        <MainSlide />
      </div>
      <Insurance />
      <FormMain />
      <Link href="/login">Login</Link>
    </div>
  );
}
