'use client';

import * as React from 'react';
import {
  Scale,
  Star,
  CreditCard,
  Settings,
  BriefcaseBusiness,
  User,
} from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export function PageSearch() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hover:text-blueNavy text-lightGray"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Search className="h-4 w-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Star className="mr-2 h-4 w-4" />
              <span>Reviews</span>
            </CommandItem>
            <CommandItem>
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              <span>Attorneys</span>
            </CommandItem>
            <CommandItem>
              <Scale className="mr-2 h-4 w-4" />
              <span>Law advice</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Shopping</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
