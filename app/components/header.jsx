import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4 sm:px-10 md:px-20'>
        <Image src={Logo} alt='logo' width={65} />
      </div>
    </div>
  );
}
