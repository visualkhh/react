import {useQuery} from 'react-query';
import {QueryKeys} from '../queryClient';
import {useParams} from 'react-router-dom';

function Cat () {
    let {id} = useParams();
    const {data} = useQuery([QueryKeys.PRODUCTS, id], ()=> {
        return fetch(`https://api.thecatapi.com/v1/images/${id}`).then(it => it.json());
    })
  return (
    <div className="catDetail">
      <h1>{data?.id}</h1>
      <p><img src={data?.url} /></p>
    </div>
  )
}

export default Cat