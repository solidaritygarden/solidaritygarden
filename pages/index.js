import Link from 'next/link'
import Header from './components/header'

export default function Home() {
  return (
    <div>
      <Header />
      Hello World. <Link href="/about">About</Link>
    </div>
  )
}
