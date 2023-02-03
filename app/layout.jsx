'use client'

import '../styles/globals.css'
import { Navbar } from '../components'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        {/* <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     
      <head /> */}
      <body className="bg-black">
        <header><Navbar/></header>
        <main>{children}</main>
      </body>
    </html>
  )
}
