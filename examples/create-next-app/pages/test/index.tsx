import {NextPage, NextPageContext} from 'next';
import {useEffect, useRef} from 'react';

const Test: NextPage = (props: any) => {
    console.log('------->', props)
    const wowbtn = useRef(null);
    const youbtn = useRef(null);
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            console.log('hashChange', window.location.hash)
        });
        // window.location.href = window.location.href;
        // window.location.hash = window.location.hash;
        // window.dispatchEvent(new Event('locationchange'));
        // window.dispatchEvent(new Event('pushstate'));
        // window.dispatchEvent(new Event('locationchange'));
        // window.dispatchEvent(new Event('popstate'));
        window.dispatchEvent(new Event('hashchange'));
        // window.dispatchEvent(new Event('hashchange'));
    }, [])
    return (
        <div>
            <div>
                <a href='#wow'>go wow</a>_______
                <a href='#you'>go you</a>
            </div>
            zzzzzzzzzzzzzz
            <button id='wow' ref={wowbtn} onFocus={() => {console.log('wow')}}>wow</button>
            <button id='you' ref={youbtn} onFocus={() => {console.log('yyy')}}>you</button>
        </div>
    )
}
export async function getServerSideProps(context: any) {
    // Pass data to the page via props
    console.log('------>', context)
    return { props: { data: '1' } }
}

export default Test;
