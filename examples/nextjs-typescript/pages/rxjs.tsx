import {useCallback, useEffect, useState} from 'react';
import {intervalEventObservable} from "../rxjs";

export default () => {
    let [data, setData] = useState(0);
    useEffect(() => {
        const subscription = intervalEventObservable.subscribe(it => {
            console.log('---?')
            setData(it);
        })
        return () => {
            subscription.unsubscribe();
        }
    }, [])

    return (
        <div className="text-3xl font-bold underline">
            <h1>rxjs</h1>
            <div>{data}</div>
        </div>
    );
}

// export default observer(() => {
//     const { eventCount } = useMobxStores();
//
//     return (
//         <div className="text-3xl font-bold underline">
//             <h1>rxjs</h1>
//             <div>{eventCount.number}</div>
//         </div>
//     );
// })
