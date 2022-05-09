import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from '../redux-store/counter';
import {Draft} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";
import useSWR from 'swr'
import {useMutation, useQuery, useQueryClient} from "react-query";
export default function Test() {
    const queryClient = useQueryClient()

    // Queries
    const query = useQuery('todos', () => {
        return new Date().toISOString();
    })

    // Mutations
    // const mutation = useMutation(postTodo, {
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries('todos')
    //     },
    // })

    return (
        <div className="text-3xl font-bold underline">
            <h1>react-query Cache</h1>
            <div>{query.data}</div>
            <button onClick={() => {queryClient.invalidateQueries('todos')}}>aaaa</button>
        </div>
    );
}
