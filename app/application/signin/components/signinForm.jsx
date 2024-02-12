"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please insert a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters" }),
});

export default function SigninForm() {
  const form = useForm({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // Add logic to handle sign-in
  };

  return (
    <Form {...form} className='px-4 sm:px-0'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-merriweather'>
          Welcome back!
        </h2>
        <h3 className='text-xs sm:text-base md:text-lg font-medium mb-10 text-gray-600'>
          Sign in to continue your journey with us.
        </h3>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Password' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          href='/application/apply'
          className={`w-full ${buttonVariants()}`}
        >
          Sign In
        </Link>
      </form>
      <div className='flex justify-center text-xs uppercase mt-5 mb-3'>
        <span className='bg-background text-muted-foreground '>
          Dont have an account?
        </span>
      </div>
      <Link
        href='/application/signup'
        className={buttonVariants({ variant: "outline" })}
      >
        Sign up
      </Link>
    </Form>
  );
}
