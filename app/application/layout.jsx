import Image from "next/image";
import Hero from "@/public/images/hero.webp";
import Header from "@/app/application/components/header";
export default function layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <div className='flex flex-col lg:flex-row flex-grow'>
        <div className='lg:w-1/2 h-full px-20 pt-[5vh]'>{children}</div>

        <div className='lg:w-1/2 h-full'>
          <Image
            src={Hero}
            alt='hero image'
            className='object-cover h-full w-full'
            priority
          />
        </div>
      </div>
    </div>
  );
}
