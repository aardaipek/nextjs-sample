import Link from 'next/link'


function List() {
  return (
    <ul className="list-group mt-5">
      <li className="list-group-item">
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
    </ul>
  )
}


export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { post: post.id.toString() }
    }))
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.post}`
    )
    const post = await res.json()
    console.log("pooossdas",post)
    return { props: { post } }
    
  }



export default List
