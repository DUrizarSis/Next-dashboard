import { Poppins } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500', '700', '800'] });
export const lusitana = Lusitana({ subsets: [ 'latin' ], weight: ['400']});