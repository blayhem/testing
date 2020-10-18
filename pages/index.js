import Head from 'next/head';
import Main from 'components/main';
import Header from 'components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sigma Rail Cat Counter</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Main />
    </>
  );
}
