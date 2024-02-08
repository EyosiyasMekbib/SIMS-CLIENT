"use client";

import SignupForm from "@/app/application/apply/components/signupForm";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();

  return <div className='mt-10'></div>;
}
