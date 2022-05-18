import Head from 'next/head'
import Header from "../header";

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

