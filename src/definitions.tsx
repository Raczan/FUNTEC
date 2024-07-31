import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email('Enter a valid email'),
  department: z.string().min(1, {
    message: 'Deparment is required',
  }),
  time: z.string().min(1, {
    message: 'Time is required',
  }),
});

export type department = {
  id: number;
  name: string;
};

export type time = {
  id: number;
  name: string;
};
