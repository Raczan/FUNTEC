import Image from 'next/image';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import { Button } from '@/components/ui/button';
import BookApointment from '@/components/bookapointment';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services, attorneys } from '@/constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
        <div className="relative inset-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 min-h-screen pt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
      <section className="h-auto w-full flex">
        <div className="gap-x-6 gap-y-8 pt-16 pb-16 mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 space-y-14">
          <div className="space-y-2">
            <h2
              className={cn(
                'text-blueNavy text-4xl text-center',
                merriWeather400.className
              )}
            >
              Practice Advice
            </h2>
            <p className="max-w-lg text-center mx-auto text-lightGray">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{' '}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 w-full">
            {services.map((service) => (
              <Card className="sm:col-span-1 bg-[#F6E4D7] border-none">
                <CardHeader className="flex flex-row gap-4 justify-center items-center font-light">
                  <span className="rounded-full w-14 h-14 bg-white flex items-center justify-center">
                    <service.icon className="text-gold" strokeWidth={1.5} />
                  </span>
                  <CardTitle
                    className={cn('text-lg', merriWeather400.className)}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="border-[#A9D6FF] border rounded-lg bg-white p-6 sm:p-10 text-lightGray">
                  <ul className="list-none">
                    <li> - The best products start with Figma</li>
                    <li> - Design with real data</li>
                    <li> - Lightning fast prototyping</li>
                    <li> - Fastest way to organize</li>
                    <li> - Work at the speed of thought.</li>
                  </ul>
                  <a href="" className="text-gold mt-1">
                    Learn more
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] via-60% to-blueNavy to-40% flex flex-col justify-center">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2
              className={cn(
                'text-blueNavy text-4xl text-center',
                merriWeather400.className
              )}
            >
              Who We Are
            </h2>
            <p className="max-w-lg text-center mx-auto text-lightGray">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{' '}
            </p>
          </div>

          <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8">
            <iframe
              className="w-full aspect-video"
              width="100%"
              height="100%"
              title="Who We Are"
              src="https://www.youtube-nocookie.com/embed/kDiWeAJhi8k"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="h-auto w-full flex bg-[#F3F3F3]">
        <div className="gap-x-6 gap-y-8 pt-20 pb-20 mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 space-y-14">
          <div className="space-y-2">
            <h2
              className={cn(
                'text-blueNavy text-4xl text-center',
                merriWeather400.className
              )}
            >
              What Clients Say
            </h2>
            <p className="max-w-lg text-center mx-auto text-lightGray">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{' '}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full">
            {[...Array(3)].map(() => (
              <Card className="sm:col-span-1">
                <CardHeader>
                  <Image
                    src="/stars.png"
                    alt="Review stars"
                    width={100}
                    height={20}
                  />
                </CardHeader>
                <CardContent className="text-lightGray">
                  <p>
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </CardContent>
                <CardFooter>
                  <Image
                    src="/woman.png"
                    alt="Review stars"
                    width={50}
                    height={50}
                    className="mr-4 h-auto"
                  />
                  <span>
                    <p className="text-gold font-semibold">Regina Miles</p>
                    <p className="text-blueNavy font-bold">Designer</p>
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto sm:h-screen w-full flex flex-col justify-center">
        <div className="gap-x-6 gap-y-8 pt-20 pb-20 mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 space-y-14 w-full">
          <div className="space-y-2">
            <h2
              className={cn(
                'text-blueNavy text-4xl text-center',
                merriWeather400.className
              )}
            >
              Meet Our Attorneys
            </h2>
            <p className="max-w-lg text-center mx-auto text-lightGray">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full">
            {attorneys.map((attorney) => (
              <Card className="sm:col-span-1 rounded-none">
                <CardHeader className="relative h-56">
                  <Image
                    className="w-full h-full"
                    src={attorney.image}
                    alt="Profile"
                    fill={true}
                  />
                </CardHeader>
                <CardContent className="text-lightGray pt-6 ">
                  <p
                    className={cn(
                      'text-blueNavy text-center',
                      merriWeather400.className
                    )}
                  >
                    {attorney.name}
                  </p>
                  <p className="font-semibold text-center">{attorney.title}</p>
                  <span className="text-skyBlue space-x-1 flex justify-center">
                    <a href={attorney.social.facebook} target="_blank">
                      <Button variant="ghost" size="icon">
                        <Facebook className="h-6 w-6" />
                      </Button>
                    </a>
                    <a href={attorney.social.instagram} target="_blank">
                      <Button variant="ghost" size="icon">
                        <Instagram className="h-6 w-6" />
                      </Button>
                    </a>
                    <a href={attorney.social.twitter} target="_blank">
                      <Button variant="ghost" size="icon">
                        <Twitter className="h-6 w-6" />
                      </Button>
                    </a>
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
