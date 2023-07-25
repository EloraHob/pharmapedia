import './globals.css'
import { Lato } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })

export const metadata = {
  title: 'Pharmapedia',
  description: 'A web app dedicated to improving medical literacy as a means to combat medication nonadherence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      {/* the navbar component goes here! */}
      <body className={lato.className}>{children}</body>
      {/* the footer component goes here! */}
    </html>
  )
}
