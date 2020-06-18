import Nav from './nav'

function Layout({ children }) {
  return (
    <div>
      <Nav></Nav>
      <main>{children}</main>
      <footer>
        <p>designed by arda</p>
      </footer>
    </div>
  )
}

export default Layout
