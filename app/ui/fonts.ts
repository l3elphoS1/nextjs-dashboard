import { Delius_Unicase, Lusitana } from 'next/font/google';

export const deliusUnicase = Delius_Unicase({
  weight: '400',
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
