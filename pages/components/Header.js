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
            <Link href='../about.js'>About</Link>
            <Link href='../contact.js'>Contact</Link>
            <Link href='../support.js'>Support</Link>
        </nav>
        </div>
  )
}
