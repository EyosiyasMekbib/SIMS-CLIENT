import SignupForm from "@/app/application/apply/components/signupForm";
import { Button } from "@/components/ui/button";
import Hero from "@/public/images/hero.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className='flex flex-col lg:flex-row flex-grow h-fit'>
      <div className='mt-10 lg:w-1/2 h-full px-20 pt-[5vh]'>
        <SignupForm />
      </div>

      <div className='lg:w-1/2 h-full'>
        <Image
          src={Hero}
          alt='hero image'
          className='object-cover h-full w-full'
          priority
        />
      </div>
    </div>
  );
}
