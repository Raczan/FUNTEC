import React from 'react';
import { Merriweather } from 'next/font/google';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/button';

const merriWeather = Merriweather({
  weight: '400',
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className="bg-blueNavy text-white py-10">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className={cn('text-xl', merriWeather.className)}>
            Litigade
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="text-xl"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Facebook className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-xl"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Instagram className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://x.com/" className="text-xl" target="_blank">
              <Button variant="ghost" size="icon">
                <Twitter className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-xl"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Youtube className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full border-b border-[#364067] mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">
          <div>
            <h3
              className={cn(
                'text-lg font-semibold mb-4',
                merriWeather.className
              )}
            >
              Company Info
            </h3>
            <ul className="space-y-1 text-mutedGray">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">We are Hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                'text-lg font-semibold mb-4',
                merriWeather.className
              )}
            >
              Legal
            </h3>
            <ul className="space-y-1 text-mutedGray">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">We are Hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                'text-lg font-semibold mb-4',
                merriWeather.className
              )}
            >
              Features
            </h3>
            <ul className="space-y-1 text-mutedGray">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                'text-lg font-semibold mb-4',
                merriWeather.className
              )}
            >
              Resources
            </h3>
            <ul className="space-y-1 text-mutedGray">
              <li>
                <a href="#">iOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customer</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                'text-lg font-semibold mb-4',
                merriWeather.className
              )}
            >
              Get in Touch
            </h3>
            <form className="flex border border-mutedGray rounded-lg">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 w-full rounded-l-md text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-white rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
