import Hero from "@/components/HeroSection/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Hero />
    </div>
  );
}
