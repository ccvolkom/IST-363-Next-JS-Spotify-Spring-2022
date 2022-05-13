import Link from 'next/link'
import Head from 'next/Head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>
          Blog Post | Katie Volkomer
          <meta name="description" content="This is a summary of the blog post"/>
        </title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}