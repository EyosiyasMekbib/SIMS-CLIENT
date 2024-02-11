import SigninForm from "@/app/application/signin/components/signinForm";
import Image from "next/image";
import Hero from "@/public/images/hero.webp";

export default function page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-nonav'>
      <div className='flex flex-col justify-center px-0 md:px-52'>
        <SigninForm />
      </div>

      <div className='h-full lg:block hidden md:flex'>
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
