import Image from 'next/image';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import { Button } from '@/components/ui/button';
import BookApointment from '@/components/bookapointment';

const merriWeather = Merriweather({
  weight: '900',
  subsets: ['latin'],
});

const merriWeather400 = Merriweather({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Navbar />
      <section className="relative w-full min-h-screen">
        <Image
          className="absolute inset-0 w-full h-full"
          src="/bgHeader.jpg"
          alt="Background header"
          fill={true}
          priority
        />
        <div className="relative inset-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 min-h-screen pt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          {/* Introduction with buttons */}
          <div className="sm:col-span-2 space-y-6 sm:my-auto mt-10">
            <p
              className={cn(
                'text-blueNavy text-5xl leading-tight hidden sm:block',
                merriWeather.className
              )}
            >
              Help to reclaim your life and freedom
            </p>
            <p
              className={cn(
                'text-blueNavy text-3xl leading-tight text-center block sm:hidden',
                merriWeather400.className
              )}
            >
              Help to reclaim your life and freedom
            </p>
            <p className="text-lightGray text-center sm:text-left">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="gap-2 flex flex-col sm:flex-row">
              <Button className="hover:bg-brown/90 bg-brown rounded-3xl w-fit mx-auto sm:mx-0">
                Get Quote Now
              </Button>
              <Button
                variant="outline"
                className="hover:bg-white !text-brown bg-transparent border-brown rounded-3xl font-bold w-fit mx-auto sm:mx-0"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Book apointment */}
          <BookApointment />
        </div>
      </section>
      <section className="h-screen w-full"></section>
    </main>
  );
}
