import icons from './icons';
import images from './images';

export const cards: {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  category: string;
  image: any;
}[] = [
  {
    id: 1,
    title: 'Card 1',
    location: 'Location 1',
    price: '$100',
    rating: 4.8,
    category: 'house',
    image: images.newYork,
  },
  {
    id: 2,
    title: 'Card 2',
    location: 'Location 2',
    price: '$200',
    rating: 3,
    category: 'house',
    image: images.japan,
  },
  {
    id: 3,
    title: 'Card 3',
    location: 'Location 3',
    price: '$300',
    rating: 2,
    category: 'flat',
    image: images.newYork,
  },
  {
    id: 4,
    title: 'Card 4',
    location: 'Location 4',
    price: '$400',
    rating: 5,
    category: 'villa',
    image: images.japan,
  },
];

export const featuredCards = [
  {
    id: 1,
    title: 'Merialla Villa',
    location: 'New York, US',
    price: '$1,20,000',
    rating: 4.8,
    image: images.newYork,
    category: 'house',
  },
  {
    id: 2,
    title: 'Modernica Apartme...',
    location: 'New York, US',
    price: '$3,80,000',
    rating: 3,
    image: images.japan,
    category: 'flat',
  },
];

export const categories = [
  { id: 1, title: 'All', category: 'All' },
  { id: 2, title: 'Houses', category: 'House' },
  { id: 3, title: 'Condos', category: 'Condos' },
  { id: 4, title: 'Duplexes', category: 'Duplexes' },
  { id: 5, title: 'Studios', category: 'Studios' },
  { id: 6, title: 'Villas', category: 'Villa' },
  { id: 7, title: 'Apartments', category: 'Apartments' },
  { id: 8, title: 'Townhomes', category: 'Townhomes' },
  { id: 9, title: 'Others', category: 'Others' },
];

export const settings = [
  {
    id: 1,
    title: 'My Bookings',
    icon: icons.calendar,
  },
  {
    id: 2,
    title: 'Payments',
    icon: icons.wallet,
  },
  {
    id: 3,
    title: 'Profile',
    icon: icons.person,
  },
  {
    id: 4,
    title: 'Notifications',
    icon: icons.bell,
  },
  {
    id: 5,
    title: 'Security',
    icon: icons.shield,
  },
  {
    id: 6,
    title: 'Language',
    icon: icons.language,
  },
  {
    id: 7,
    title: 'Help Center',
    icon: icons.info,
  },
  {
    id: 8,
    title: 'Invite Friends',
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: 'Laundry',
    icon: icons.laundry,
  },
  {
    title: 'Car Parking',
    icon: icons.carPark,
  },
  {
    title: 'Sports Center',
    icon: icons.run,
  },
  {
    title: 'Cutlery',
    icon: icons.cutlery,
  },
  {
    title: 'Gym',
    icon: icons.dumbell,
  },
  {
    title: 'Swimming pool',
    icon: icons.swim,
  },
  {
    title: 'Wifi',
    icon: icons.wifi,
  },
  {
    title: 'Pet Center',
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];
