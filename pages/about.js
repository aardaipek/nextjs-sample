import Nav from '../components/nav'
import Head from 'next/head'

function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  )
}

export default AboutPage
