import Head from 'next/head'

export default function PostPage(props) {
    const {dataPost} = props;
    return (
        <>
            <Head>
            <title>Jamstack | Post</title>
            </Head>
            <p>ini adalah halaman post</p>  
            {dataPost.map(post => {
                return (
                    <>
                        <p>{post.title}</p>
                        <p>{post.tags}</p>
                    </>
                )
            })}
        </> 
    );
}

export async function getStaticProps(){
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const dataPost = await res.json();
    return {
        props: {
            dataPost,
        },
    };
}