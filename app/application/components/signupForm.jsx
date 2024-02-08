"use client";

import { useForm } from "react-hook-form";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SignupFormSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "Please insert a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number should be at least 10 digits" })
    .max(15),
  selectedProgram: z.string().nonempty(),
  selectedDiscipline: z.string().nonempty(),
  selectedProgramType: z.string().nonempty(),
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
                {/* <FormLabel>Selected Program</FormLabel> */}
                <FormControl>
                  <Select
                    {...field}
                    className='block w-full p-2 border rounded-md'
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Program' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem values='undergratuate'>
                        Undergraduate
                      </SelectItem>
                      <SelectItem values='postgratuate'>
                        Postgraduate
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectedDiscipline'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Selected Program</FormLabel> */}
                <FormControl>
                  <Select
                    {...field}
                    className='block w-full p-2 border rounded-md'
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Discipline' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem values='undergratuate'>
                        Undergraduate
                      </SelectItem>
                      <SelectItem values='postgratuate'>
                        Postgraduate
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectedProgramType'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Selected Program</FormLabel> */}
                <FormControl>
                  <Select
                    {...field}
                    className='block w-full p-2 border rounded-md'
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Program Type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem values='regular'>Regular</SelectItem>
                      <SelectItem values='extenstion'>Extenstion</SelectItem>
                      <SelectItem values='extenstion'>Weekend</SelectItem>
                      <SelectItem values='extenstion'>Summer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
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
    </Form>
  );
}
