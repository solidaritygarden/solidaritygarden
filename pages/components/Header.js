import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
        <div>
            <h1>Solidarity Garden</h1>
            <p>because lawns suck and solidarity is everything</p>
        </div>
        <nav>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/support'>Support</Link>
        </nav>
        </div>
  )
}
