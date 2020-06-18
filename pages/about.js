import Nav from '../components/nav'
import Head from 'next/head'

function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <style jsx>{`
        .container {
          margin: 50px;
        }
      `}</style>
    </div>
  )
}

export default AboutPage
