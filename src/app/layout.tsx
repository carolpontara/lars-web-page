import './styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Open_Sans, Saira_Extra_Condensed } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const sairaExtraCondensed = Saira_Extra_Condensed({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'Kelton Costa',
  description: 'Advanced Network and Security Lab UNESP Bauru - LARS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-900 text-lg ${openSans.className} ${sairaExtraCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
