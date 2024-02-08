import SigninForm from "@/app/application/signin/components/signinForm";
import Image from "next/image";
import Hero from "@/public/images/hero.webp";

export default function page() {
  return (
    <div className='flex flex-col lg:flex-row flex-grow h-fit'>
      <div className='mt-10 lg:w-1/2 h-full px-20 pt-[5vh]'>
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
