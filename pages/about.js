import Head from 'next/head'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <Head>
                <title>jamstack | About</title>
            </Head>
            <Image src="/image1.jpg" width={500} height={400}></Image>
            <img src="/image1.jpg" style={{width:500, height:400}}></img>
        </>
    );
}