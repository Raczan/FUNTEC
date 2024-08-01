'use client';
import React from 'react';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { defaultValBookAppoint, departments, times } from '@/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formSchema, department, time } from '@/definitions';

const merriWeather = Merriweather({
  weight: '700',
  subsets: ['latin'],
});

const BookApointment = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValBookAppoint,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        className="sm:col-span-1 space-y-6 sm:my-auto bg-white rounded-md p-6 sm:p-8 lg:p-10 text-xl text-center mt-10 mb-14"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <p className={cn('text-blueNavy font', merriWeather.className)}>
          Book Appointment
        </p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-blueNavy font text-left flex">
                Name*
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete="on"
                  type="text"
                  {...field}
                  placeholder="Full Name"
                  className="bg-[#F9F9F9]  border-mutedGray !text-lightGray"
                />
              </FormControl>
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-blueNavy font text-left flex">
                Email*
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete="on"
                  type="email"
                  {...field}
                  placeholder="example@gmail.com"
                  className="bg-[#F9F9F9]  border-mutedGray !text-lightGray"
                />
              </FormControl>
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-blueNavy font text-left flex">
                Department*
              </FormLabel>
              <Select onValueChange={field.onChange} name="department">
                <FormControl>
                  <SelectTrigger className="!text-lightGray bg-[#F9F9F9]  border-mutedGray">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {departments.map((department: department) => (
                    <SelectItem
                      key={department.id}
                      value={department.id.toString()}
                    >
                      {department.name}
                    </SelectItem>
                  ))}

                  {!departments.length && (
                    <SelectItem key="error" value="0" disabled={true}>
                      <p className="max-w-60">No apartments to show</p>
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-blueNavy font text-left flex">
                Time*
              </FormLabel>
              <Select onValueChange={field.onChange} name="time">
                <FormControl>
                  <SelectTrigger className="!text-lightGray bg-[#F9F9F9]  border-mutedGray">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {times.map((time: time) => (
                    <SelectItem key={time.id} value={time.name}>
                      {time.name}
                    </SelectItem>
                  ))}

                  {!times.length && (
                    <SelectItem key="error" value="0" disabled={true}>
                      <p className="max-w-60">No times Available</p>
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full p-6 bg-skyBlue">
          Book Appointment
        </Button>
      </form>
    </Form>
  );
};

export default BookApointment;
