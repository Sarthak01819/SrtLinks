import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' bg-purple-700 flex justify-between items-center text-white p-4'>
      <span className='font-bold text-3xl'><Link href="/">SrtLinks</Link></span>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='/about' className='hover:underline'>About</Link>
        <Link href='/shorten' className='hover:underline'>Shorten</Link>
        <Link href='/contact' className='hover:underline'>Contact Us</Link>
        <Link href='/shorten'>
          <button className='border-3 border-purple-50 px-2 py-1 rounded-full hover:cursor-pointer font-bold hover:text-black hover:bg-purple-50'>Try Now</button>
        </Link>
        <Link href='/github'>
          <button className='border-3 border-purple-50 px-2 py-1 rounded-full hover:cursor-pointer font-bold hover:text-black hover:bg-purple-50'>GitHub</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar