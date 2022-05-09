import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";

export default function Test() {
    const dispatch = useDispatch();
    const value = useSelector(({counter}: RootState) => counter.count);
    const plus = useCallback(({value}: any) => {
        dispatch(counterActions.increment());
    }, [dispatch]);
    const minus = useCallback(({value}: any) => {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    const incrementByAmount = useCallback((value: number) => {
        dispatch(counterActions.incrementByAmount(value));
    }, [dispatch]);
    return (<div className="text-3xl font-bold underline"><h1>Counter</h1>
        <div>{value}</div>
        <div>
            <button onClick={() => minus({value})}>-</button>,
            <button onClick={() => plus({value})}>+</button>,
            <button onClick={() => incrementByAmount(33)}>+33</button>
        </div>
    </div>);
}
