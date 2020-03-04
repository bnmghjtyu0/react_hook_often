import Head from 'next/head'
import { useTitle } from './hooks/index'

const Home = () => {
  useTitle('123')
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home
