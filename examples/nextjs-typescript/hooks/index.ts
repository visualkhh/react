import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Observable} from "rxjs";
export const makeEffectObservable = <T>(observable: Observable<T>) => {
    const r = {
        subscribe: (next: (value: T) => void) => {
            useEffect(() => {
                const subscription = observable.subscribe(next);
                return () => subscription.unsubscribe();
            }, []);
        }
    }
    return r;
}


// export const makeStateContainer = <T>(initialState: T) => {
// }