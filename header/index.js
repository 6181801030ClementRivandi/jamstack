import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
        <header className={styles.topnav}>
                <Link href="/"><a className={styles.a}>halaman home</a></Link>
                <Link href="/products"><a className={styles.a}>halaman products</a></Link>
                <Link href="/post"><a className={styles.a}>halaman post</a></Link>
                <a href="/about" className={styles.a}>halaman about</a>
        </header>
    );
}