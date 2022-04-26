import {useQuery} from 'react-query';
import {QueryKeys} from '../queryClient';
import {useParams} from 'react-router-dom';

function Second () {
    let {id} = useParams();
    const {data} = useQuery([QueryKeys.PRODUCTS, id], ()=> {
        console.log('-----', id)
        return 100;
    })
  return (
    <div>
      <h1>Second</h1>
      <p>{data}
        This is the Second page.
      </p>
    </div>
  )
}

export default Second