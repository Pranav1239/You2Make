import Hearder from '@/components/Header/Hearder'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { AuthProvider } from '@/components/providers/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Hearder />
        <div className='wrapper mt-8'>
        {children}
        </div>
        <Footer />
        </AuthProvider>
        </body>
    </html>
  )
}
