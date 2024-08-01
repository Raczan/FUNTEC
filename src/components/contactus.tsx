'use client';
import React from 'react';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { defaultValContact, departments, times } from '@/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formSchemaContact, department, time } from '@/definitions';

const merriWeather = Merriweather({
  weight: '400',
  subsets: ['latin'],
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchemaContact>>({
    resolver: zodResolver(formSchemaContact),
    defaultValues: defaultValContact,
  });

  const onSubmit = (values: z.infer<typeof formSchemaContact>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        className="sm:col-span-4 gap-4 sm:my-auto mt-10 mb-14 space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <span className="sm:col-span-2">
          <h2 className={cn('text-blueNavy', merriWeather.className)}>
            Contact Us
          </h2>
          <p
            className={cn(
              'text-blueNavy text-4xl mb-8',
              merriWeather.className
            )}
          >
            Make an Appointment
          </p>
        </span>

        <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    autoComplete="on"
                    type="text"
                    {...field}
                    placeholder="Full Name"
                    className="border-[#BDBDBD] !text-lightGray"
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
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    autoComplete="on"
                    type="email"
                    {...field}
                    placeholder="example@gmail.com"
                    className="border-[#BDBDBD] !text-lightGray"
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select onValueChange={field.onChange} name="department">
                  <FormControl>
                    <SelectTrigger className="!text-lightGray border-[#BDBDBD]">
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
              <FormItem className="w-full">
                <Select onValueChange={field.onChange} name="time">
                  <FormControl>
                    <SelectTrigger className="!text-lightGray  border-[#BDBDBD]">
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
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea
                  placeholder="Message"
                  {...field}
                  className="border-[#BDBDBD]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="hover:bg-brown/90 bg-brown w-full sm:w-fit mx-auto sm:mx-0 p-6"
          type="submit"
        >
          Book Appointment
        </Button>
      </form>
    </Form>
  );
};

export default ContactUs;
