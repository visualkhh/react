import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";
import useSWR from 'swr'
import {makeAutoObservable} from "mobx";
import {useMobxStores} from "../mobx-store";
import {MobXProviderContext} from "mobx-react";
import {observer} from "mobx-react-lite";

// class Timer {
//     secondsPassed = 0
//
//     constructor() {
//         makeAutoObservable(this)
//     }
//
//     increaseTimer() {
//         this.secondsPassed += 1
//     }
// }
// const myTimer = new Timer();
const CountPage = () => {
    // const { count } = React.useContext(MobXProviderContext);
    const { count, eventCount } = useMobxStores();
    return (
        <div className="text-3xl font-bold underline">
            <h1>Mobx</h1>
            <div>{count.number}</div>
            <div>
                <button className={'btn'} onClick={count.increase}>+</button>
                <button className={'btn'} onClick={count.decrease}>-</button>
            </div>
        </div>
    );
}

export default observer(CountPage);
// export default observer(() => {
//     const { count } = React.useContext(MobXProviderContext);
//     return (
//         <div className="text-3xl font-bold underline">
//             <h1>Mobx</h1>
//             <div>{count.number}</div>
//             <div>
//                 <button onClick={count.increase}>+</button>
//                 <button onClick={count.decrease}>-</button>
//             </div>
//         </div>
//     );
// })