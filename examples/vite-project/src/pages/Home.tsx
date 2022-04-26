import {useQuery} from 'react-query';
import {QueryKeys} from '../queryClient';
import {Link} from 'react-router-dom';

function Home() {
    const {data} = useQuery(QueryKeys.PRODUCTS, () => {
        // return fetch('https://api.thecatapi.com/v1/breeds').then(it => it.json());
        return fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(it => it.json());
        // return 100;
    })
    return (

        <div className="catInfo">
            <h1>Home</h1>
            <p>{data?.map(({url, id}, idx) => {
                return (
                    <Link to={`/cats/${id}`}>
                        <div>{idx}: <img src={url}/> {id}</div>
                    </Link>
                )
            })}
            </p>
        </div>
    )
}

export default Home