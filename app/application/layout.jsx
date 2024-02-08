import Image from "next/image";
import Hero from "@/public/images/hero.webp";
import Header from "@/app/application/components/header";
export default function layout({ children }) {
  return (
    <div className='h-screen'>
      <Header />

      {children}
    </div>
  );
}
