import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { slideAbout} from "@/components/slideAbout";

export default function Blog() {
  return (
    <div className="text-center">
      <Navbar />
      <slideAbout />
       <Footer />
       </div>
       );
}