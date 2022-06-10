import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";

export default function Test() {

    const [user, setUser] = useState({name: 'zz'});
    const change = () => {
        // setUser({name: new Date().toISOString()});
        setUser({name: new Date().toISOString()});
    }
    useEffect(() => {
        console.log('----change----effect')
    }, [user.name])
    return (
      <div>
          {user.name}
          <div>
              <button className='btn' onClick={change}>change</button>
          </div>
      </div>
    )
    // useEffect(() => {
    //     console.log('---')
    // }, [])
    // const dispatch = useDispatch();
    // const value = useSelector(({counter}: RootState) => counter.count);
    // const plus = useCallback(({value}: any) => {
    //     dispatch(counterActions.increment());
    // }, [dispatch]);
    // const minus = useCallback(({value}: any) => {
    //     dispatch(counterActions.decrement());
    // }, [dispatch]);
    // const incrementByAmount = useCallback((value: number) => {
    //     dispatch(counterActions.incrementByAmount(value));
    // }, [dispatch]);
    // return (<div className="text-3xl font-bold underline"><h1>Counter</h1>
    //     <button className={'py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none'} onClick={() => minus({value})}>-</button>
    //     <span>{value}</span>
    //     <button className={'py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none'} onClick={() => plus({value})}>+</button>
    //     <button className={'py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none'} onClick={() => incrementByAmount(33)}>+33</button>
    // </div>);
}
