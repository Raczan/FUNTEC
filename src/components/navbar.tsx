'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { navbarLinks } from '@/constants';
import { Button } from './ui/button';
import Link from 'next/link';
import { Merriweather } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { ShopCart } from './shopcart';
import { PageSearch } from './search';

const merriWeather = Merriweather({
  weight: '700',
  subsets: ['latin'],
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-10 transition-colors duration-300 bg-transparent',
        scrolled && 'bg-white',
        openMenu && 'bg-white'
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between z-10">
          <Link href="/" className={cn('text-xl', merriWeather.className)}>
            Litigade
          </Link>

          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Desktop navigation links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navbarLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <Button
                      variant="link"
                      className={`hover:text-blueNavy ${
                        link.href === pathname
                          ? 'text-blueNavy'
                          : 'text-lightGray'
                      }`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <PageSearch />
            <ShopCart />

            {/* Burguer menu */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-blueNavy text-lightGray flex sm:hidden"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {openMenu ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={cn('sm:hidden', !openMenu && 'hidden')}>
        <div className="flex flex-col gap-2 p-2">
          {navbarLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <Button
                variant="ghost"
                className={`hover:text-blueNavy w-full ${
                  link.href === pathname ? 'text-blueNavy' : 'text-lightGray'
                }`}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
