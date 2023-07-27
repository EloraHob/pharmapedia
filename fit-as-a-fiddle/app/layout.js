import './globals.css'
import { Lato } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './navbar';
import MyFooter from './footer';

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })

export const metadata = {
  title: 'Pharmapedia',
  description: 'A web app dedicated to improving medical literacy as a means to combat medication nonadherence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
      <MyNavbar />
      {children}
      <MyFooter />
      </body>
    </html>
  )
}
