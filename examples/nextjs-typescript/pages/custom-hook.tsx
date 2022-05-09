import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";
import {intervalEventObservable} from "../rxjs";
import {observer} from "mobx-react-lite";
import {useMobxStores} from "../mobx-store";
import eventCount from "../mobx-store/EventCount";
import {makeEffectObservable, makeStatePropertys, makeStateValue} from "../hooks";
import {StateValue} from "../hooks/state/StateValue";
//
export default () => {
    const dataContainer = makeStatePropertys({name: 'z', age: 55, cnt: 0});
    const data = makeStateValue(0)

    makeEffectObservable(intervalEventObservable).subscribe(it => {
        // data.value = it;
        dataContainer.cnt = it;
    })

    return (
        <div className="text-3xl font-bold underline">
            <h1>custom-hook</h1>
            {/*<div>{data.value}</div>*/}
            <div>{dataContainer.cnt}</div>
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
