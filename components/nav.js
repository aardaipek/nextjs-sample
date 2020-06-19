import Link from 'next/link'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <li className="nav-item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
