import Head from 'next/head'
import Main from 'components/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sigma Rail Cat Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  )
}
