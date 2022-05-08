import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../store";
import useSWR from 'swr'
export default function Test() {
    const { data, error } = useSWR('/api/user/123', (key: string) => {
        return new Date().toISOString();
    }, {refreshInterval: 1000})
    return (
        <div className="text-3xl font-bold underline">
            <h1>Cache</h1>
            <div>{data}</div>
        </div>
    );
}
