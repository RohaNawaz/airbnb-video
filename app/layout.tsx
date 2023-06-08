import { Nunito } from 'next/font/google'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { SafeUser } from '@/app/types';
import RentModal from './components/modals/RentModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb', 
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: [ "latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={ currentUser }/>
        </ClientOnly>
        <div className='ph-20 pt-28'>
        {children}
        </div>
        </body>
    </html>
  )
}
// className={inter.className}