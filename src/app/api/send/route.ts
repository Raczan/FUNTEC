import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  console.log(name, email);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Confirmation <confirmation@info.raczan.com>',
      to: [`${email}`],
      subject: 'Book Appointment',
      react: EmailTemplate({ name: name }),
    });

    if (error) {
      console.log('entro aqui');
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
