"use client";

import { useForm, watch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignupFormSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "Please insert a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number should be at least 10 digits" })
    .max(15),
  selectedProgram: z
    .string()
    .nonempty({ message: "Please select a discipline" }),
  selectedDiscipline: z
    .string()
    .nonempty({ message: "Please select a program" }),
  selectedProgramType: z
    .string()
    .nonempty({ message: "Please select a program type" }),
});

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectedProgram: "",
      selectedDiscipline: "",
      selectedProgramType: "",
    },
  });

  function onSubmit(Values) {
    console.log(Values);
  }
  return (
    <Form {...form}>
      <h2 className='text-4xl font-bold mb-2'>
        Welcome to Our Colleges
        <br /> Online Application
      </h2>
      <h3 className='text-lg font-medium mb-10 text-gray-600'>
        Start your journey with us today!
      </h3>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 w-10/12'
      >
        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>First Name</FormLabel> */}
                <FormControl>
                  <Input placeholder='First Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='middleName'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Middle Name</FormLabel> */}
                <FormControl>
                  <Input placeholder='Middle Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Last Name</FormLabel> */}
                <FormControl>
                  <Input placeholder='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Phone Number</FormLabel> */}
                <FormControl>
                  <Input placeholder='Phone Number' type='tel' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='selectedProgram'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Program</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='block w-full p-2 border rounded-md'
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select Program' {...field} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Programs</SelectLabel>
                      <SelectItem value='undergratuate'>
                        Undergraduate
                      </SelectItem>
                      <SelectItem value='postgratuate'>Postgraduate</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectedDiscipline'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Discipline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='block w-full p-2 border rounded-md'
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select Discipline' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Undergraduate</SelectLabel>
                      <SelectItem value='Software Engineering'>
                        Software Engineering
                      </SelectItem>
                      <SelectItem value='Information Systems & Technology'>
                        Information Systems & Technology
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Postgraduate</SelectLabel>
                      <SelectItem value='Enterprise System'>
                        Enterprise System
                      </SelectItem>
                      <SelectItem value='Information Systems Managment'>
                        Information Systems Managment
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectedProgramType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Program Type</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='block w-full p-2 border rounded-md'
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select Program Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='regular'>Regular</SelectItem>
                    <SelectItem value='extenstion'>Extenstion</SelectItem>
                    <SelectItem value='weekend'>Weekend</SelectItem>
                    <SelectItem value='summer'>Summer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <Input placeholder='Password' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Confirm Password</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder='Confirm Password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>Apply</Button>
      </form>
      <div className='relative flex justify-start text-xs uppercase mt-8 mb-3'>
        <span className='bg-background pr-5 text-muted-foreground'>
          Already Have an Account?
        </span>
      </div>

      <Link
        href='/application/signin'
        className={buttonVariants({ variant: "outline" })}
      >
        Sign In
      </Link>
    </Form>
  );
}
