import ApplicationForm from "@/app/application/apply/components/applicationForm";
import { Button } from "@/components/ui/button";
import Hero from "@/public/images/hero.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className='flex flex-col lg:flex-row flex-grow h-fit'>
      <div className='mt-10 lg:w-1/2 h-full px-20 pt-[5vh]'>
        <ApplicationForm />
      </div>

      <div className='lg:w-1/2 h-[90vh] flex items-center'>
        <Image src={Hero} alt='hero image' priority className='w-full' />
      </div>
    </div>
  );
}
