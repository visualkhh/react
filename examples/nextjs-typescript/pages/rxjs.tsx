import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";
import {intervalEventObservable} from "../rxjs";
import {observer} from "mobx-react-lite";
import {useMobxStores} from "../mobx-store";
import eventCount from "../mobx-store/EventCount";
import {makeEffectObservable} from "../hooks";
import {StateValue} from "../state/StateContainer";
//
export default () => {
    // let data = 0;
    // let [data, setData] = useState(0);
    const data = new StateValue(0)
    // useEffect(() => {
    //     const subscription = intervalEventObservable.subscribe(it => {
    //         console.log('---?')
    //         setData(it);
    //     })
    //     return () => {
    //         subscription.unsubscribe();
    //     }
    // }, [])

    makeEffectObservable(intervalEventObservable).subscribe(it => {
        // setData(it);
        data.value = it;
    })

    return (
        <div className="text-3xl font-bold underline">
            <h1>rxjs</h1>
            <div>{data.value}</div>
            {/*<div>{data}</div>*/}
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
