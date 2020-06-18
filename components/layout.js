import Nav from './nav'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
    <Head>
        <title>Next-Sample</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav></Nav>
      <main>{children}</main>
      <footer>
        <p>designed by arda</p>
      </footer>
    </div>
  )
}

export default Layout
