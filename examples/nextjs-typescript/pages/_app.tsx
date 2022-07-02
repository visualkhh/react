import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from "next/link";
import {Provider as MobxProvider} from "mobx-react";
import mobxStores from "../mobx-store";
import {Provider as ReduxProvider} from "react-redux";
import store from "../redux-store/index";
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
        <MobxProvider {...mobxStores}>
            <ReduxProvider store={store}>
                <QueryClientProvider client={queryClient}>
                    <div>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link href="/test">*/}
                            {/*        <a>Test</a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}


                            <li>
                                <Link href="/redux">
                                    <a>redux</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/mobx">
                                    <a>mobx</a>
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
                                <Link href="/tailwind">
                                    <a>tailwind</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/rxjs">
                                    <a>rxjs</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/test">
                                    <a>test</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/custom-hook">
                                    <a>custom-hook</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/apitest">
                                    <a>api-test</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reactwindow">
                                    <a>reactwindow</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/children">
                                    <a>children</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/hello-world">
                                    <a>Blog Post</a>
                                </Link>
                            </li>
                        </ul>
                        <div className={'p-4 border-2 border-sky-500'}>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </QueryClientProvider>
            </ReduxProvider>
        </MobxProvider>
    )
}

// export default  wrapper.withRedux(MyApp)
export default MyApp
