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
    <Form {...form} className=''>
      <h2 className='text-4xl font-bold mb-2'>Welcome back!</h2>
      <h3 className='text-lg font-medium mb-10 text-gray-600'>
        Sign in to continue your journey with us.
      </h3>
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
        <Button type='submit'>Sign In</Button>
      </form>
      <div className='relative flex justify-start text-xs uppercase mt-8 mb-3'>
        <span className='bg-background pr-5 text-muted-foreground'>
          Dont have an account?
        </span>
      </div>
      <Link
        href='/application/apply'
        className={buttonVariants({ variant: "outline" })}
      >
        Apply
      </Link>
    </Form>
  );
}
