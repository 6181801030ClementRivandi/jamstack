import Header from "../header";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamstack | Home</title>
      </Head>
      <Header></Header>
      <h1>ini adalah halaman home</h1>
    </>
  );
}

