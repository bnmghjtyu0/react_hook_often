import Head from 'next/head'
import { useTitle } from './hooks/index'
import { useCount, useDispatchCount } from './contexts/countContext'
const Home = () => {
  const { count } = useCount()
  console.log(count)
  const dispatch = useDispatchCount()
  useTitle('123')

  const add = () => {
    dispatch({
      type: 'INCREASE'
    })
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {count}
      <button onClick={add}>add</button>
    </div>
  )
}

export default Home
