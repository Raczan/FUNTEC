import { Scale, Gavel, ScrollText } from 'lucide-react';
export const navbarLinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '#product',
    name: 'Product',
  },
  {
    href: '#pricing',
    name: 'Pricing',
  },
  {
    href: '#contact',
    name: 'Contact',
  },
];

export const defaultValBookAppoint = {
  name: '',
  email: '',
  // selects //
  department: '',
  time: '',
};

export const defaultValContact = {
  name: '',
  email: '',
  // selects //
  department: '',
  time: '',
  message: '',
};

export const departments = [
  { id: 1, name: 'Guatemala' },
  { id: 2, name: 'El Progreso' },
  { id: 3, name: 'Sacatepéquez' },
  { id: 4, name: 'Chimaltenango' },
  { id: 5, name: 'Escuintla' },
  { id: 6, name: 'Santa Rosa' },
  { id: 7, name: 'Sololá' },
  { id: 8, name: 'Totonicapán' },
  { id: 9, name: 'Quetzaltenango' },
  { id: 10, name: 'Suchitepéquez' },
  { id: 11, name: 'Retalhuleu' },
  { id: 12, name: 'San Marcos' },
  { id: 13, name: 'Huehuetenango' },
  { id: 14, name: 'Quiché' },
  { id: 15, name: 'Baja Verapaz' },
  { id: 16, name: 'Alta Verapaz' },
  { id: 17, name: 'Petén' },
  { id: 18, name: 'Izabal' },
  { id: 19, name: 'Zacapa' },
  { id: 20, name: 'Chiquimula' },
  { id: 21, name: 'Jalapa' },
  { id: 22, name: 'Jutiapa' },
];

export const times = [
  { id: 1, name: '4:00 Available' },
  { id: 2, name: '4:30 Available' },
  { id: 3, name: '5:00 Available' },
  { id: 4, name: '5:30 Available' },
  { id: 5, name: '6:00 Available' },
  { id: 6, name: '6:30 Available' },
  { id: 7, name: '7:00 Available' },
  { id: 8, name: '7:30 Available' },
  { id: 9, name: '8:00 Available' },
  { id: 10, name: '8:30 Available' },
];

export const services = [
  { id: 1, title: 'Frauds or Mislead', icon: Scale },
  { id: 2, title: 'Bailes & Warrants', icon: Gavel },
  { id: 3, title: 'Federal Drug Crimes', icon: ScrollText },
];

export const attorneys = [
  {
    id: 1,
    image: '/ashley.png',
    name: 'Ashley Fletcher',
    title: 'LAYER & CEO',
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://x.com/',
    },
  },
  {
    id: 2,
    image: '/rodney.png',
    name: 'Rodney Stratton',
    title: 'CEO',
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://x.com/',
    },
  },
  {
    id: 3,
    image: '/avie.png',
    name: 'Avie Beaton',
    title: 'LAYER CIVIL LAW',
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://x.com/',
    },
  },
];
