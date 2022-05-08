import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from "next/link";
import {wrapper} from "../store";
import {Provider} from "react-redux";
import store from "../store/index";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
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
                            <Link href="/test">
                                <a>Test</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/swr-cache">
                                <a>swr-cache</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/react-query-cache">
                                <a>react-query-cache</a>
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
            </QueryClientProvider>
        </Provider>
    )
}

// export default  wrapper.withRedux(MyApp)
export default MyApp
