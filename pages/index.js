import Layout from '../components/layout'
import Hero from '../components/jumbotron'
import Editor from '../components/editor'
import List from '../components/list'

function HomePage() {
  return (
    <Layout>
      <Hero></Hero>
      <Editor></Editor>
      <List></List>
    </Layout>
  )
}

export default HomePage
