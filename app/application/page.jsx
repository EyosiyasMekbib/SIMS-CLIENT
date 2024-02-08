import SignupForm from "@/app/application/components/signupForm";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className='mt-10 h-full'>
      <h2 className='text-4xl font-bold mb-2'>
        Welcome to Our Colleges
        <br /> Online Application
      </h2>
      <h3 className='text-lg font-medium mb-10 text-gray-600'>
        Start your journey with us today!
      </h3>

      <SignupForm />

      <div className='relative flex justify-start text-xs uppercase mt-8 mb-2'>
        <span className='bg-background pr-5 text-muted-foreground'>
          Already Have an Account?
        </span>
      </div>

      <Button variant='outline'>Sign In</Button>
    </div>
  );
}
