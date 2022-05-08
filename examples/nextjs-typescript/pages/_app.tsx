import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from "next/link";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">
                        <a>Blog Post</a>
                    </Link>
                </li>
            </ul>
            <div>
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
