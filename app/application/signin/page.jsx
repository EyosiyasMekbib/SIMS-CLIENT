import SigninForm from "@/app/application/signin/components/signinForm";
import Image from "next/image";
import Hero from "@/public/images/hero.webp";

export default function page() {
  return (
    <div className='flex justify-between items-center h-nonav'>
      <div className='col-start-1 col-span-1'>
        <SigninForm />
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
