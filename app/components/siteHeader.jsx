import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function siteHeader() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-6'>
        <Image src={Logo} alt='logo' width={65} />
      </div>
    </div>
  );
}
