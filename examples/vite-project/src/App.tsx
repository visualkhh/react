import {useState, Suspense} from 'react'
import {QueryClientProvider} from 'react-query'
import logo from './logo.svg'
import './App.css'
import {getClient} from './queryClient';
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Second from './pages/Second';
import Cat from './pages/Cat';

function App() {
    let queryClient = getClient();
    const [count, setCount] = useState(0)
    // const [toggle, setToggle] = useState(true)
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cats/:id" element={<Cat />} />
                    </Routes>
                </Suspense>
                <Link to="/">home</Link>,
                <Link to="/second/5">second</Link>
            </Router>

            {/*{count > 1 ? <Home /> : <div>{count}</div>}*/}
            {/*<button onClick={()=>{setToggle((o) => o!)}}>toggle : {toggle === true}</button>*/}
            <button type="button" onClick={() => setCount((count) => count + 1)}>
                ++count is: {count}
            </button>
            <button type="button" onClick={() => setCount((count) => count - 1)}>
                --count is: {count}
            </button>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
