import Link from 'next/link'

function Nav() {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Nav
