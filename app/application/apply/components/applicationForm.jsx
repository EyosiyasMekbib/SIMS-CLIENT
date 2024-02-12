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
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const ApplicationFormSchema = z.object({
  firstname: z.string().min(2, { message: "Please enter first name" }),
  middlename: z.string().min(2, { message: "Please enter middle name" }),
  lastname: z.string().min(2, { message: "Please enter last name" }),
  email: z.string().email({ message: "Please insert a valid email address" }),
  nationality: z.string().min(2, { message: "Please enter nationality" }),
  phonenumber: z
    .string()
    .min(10, { message: "Phone number should be at least 10 digits" })
    .max(15),
  gender: z.enum(["male", "female"], { message: "Please select a gender" }),
  selectedprogram: z.enum(["undergraduate", "postgraduate"], {
    message: "Please select a program",
  }),
  selecteddiscipline: z.enum(
    [
      "informationsystemsmanagment",
      "informationsystemsandtechnology",
      "softwareengineering",
      "enterprisesystem",
    ],
    {
      invalid_type_error: "Please enter a valid type",
      required_error: "Please select a discipline",
    }
  ),
  selectedprogramtype: z.enum(["summer", "extenstion", "regular", "weekend"], {
    message: "Please select a program type",
  }),
  declaration: z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be a boolean",
  }),
  agreement: z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be a boolean",
  }),
});

export default function ApplicationForm() {
  const form = useForm({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      phonenumber: "",
      nationality: "",
      gender: "",
      selectedprogram: "",
      selecteddiscipline: "",
      selectedprogramType: "",
      declaration: "",
      agreement: "",
    },
  });

  const selectedProgram = form.watch("selectedprogram");
  const selectedDiscipline = form.watch("selecteddiscipline");
  const declaration = form.watch("declaration");
  const agreement = form.watch("agreement");

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <h2 className='text-5xl font-bold mb-2 font-merriweather'>
        Welcome to Our Colleges
        <br /> Online Application
      </h2>
      <h3 className='text-lg font-medium mb-10 text-gray-600'>
        Start your journey with us today!
      </h3>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 w-10/12'
      >
        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='First Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='middlename'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>

                <FormControl>
                  <Input placeholder='Middle Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@college.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phonenumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='09XXXXXXXX' type='tel' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='nationality'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder='Country' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex space-x-1'
                  >
                    <FormItem className='flex items-center space-x-2 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='male' />
                      </FormControl>
                      <FormLabel>Male</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-2 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='female' />
                      </FormControl>
                      <FormLabel>Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>
        <Separator />

        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='selectedprogram'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program</FormLabel>
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
                      <SelectItem value='undergraduate'>
                        Undergraduate
                      </SelectItem>
                      <SelectItem value='postgraduate'>Postgraduate</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selecteddiscipline'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discipline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='block w-full p-2 border rounded-md'
                  disabled={!selectedProgram}
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select Discipline' />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedProgram === "undergraduate" && (
                      <SelectGroup>
                        <SelectLabel>Undergraduate</SelectLabel>
                        <SelectItem value='softwareengineering'>
                          Software Engineering
                        </SelectItem>
                        <SelectItem value='informationsystemsandtechnology'>
                          Information Systems & Technology
                        </SelectItem>
                      </SelectGroup>
                    )}

                    {selectedProgram === "postgraduate" && (
                      <SelectGroup>
                        <SelectLabel>Postgraduate</SelectLabel>
                        <SelectItem value='enterprisesystem'>
                          Enterprise System
                        </SelectItem>
                        <SelectItem value='informationsystemsmanagment'>
                          Information Systems Managment
                        </SelectItem>
                      </SelectGroup>
                    )}
                  </SelectContent>
                </Select>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectedprogramtype'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='block w-full p-2 border rounded-md'
                  disabled={!selectedDiscipline}
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
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>

        <div className=''>
          <FormField
            control={form.control}
            name='declaration'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 p-4 '>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>
                    I declare that all information provided in this application
                    form and in support of my application is complete and true.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='agreement'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 p-4 '>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>
                    I agree to the the{" "}
                    <Link href='/examples/forms' className='text-blue-400'>
                      {" "}
                      privacy statement
                    </Link>{" "}
                    that explains how College will use the information I have
                    provided.{" "}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' disabled={!agreement || !declaration}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
