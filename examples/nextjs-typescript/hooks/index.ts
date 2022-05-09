import {Dispatch, EffectCallback, SetStateAction, useEffect, useState} from "react";
import {Observable} from "rxjs";
import {StateValue} from "./state/StateValue";
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

export const makeEffect = (effect: EffectCallback) => {
    useEffect(effect, []);
}

export const makeStateValue = <T>(initialState: T) => {
    return new StateValue(initialState)
}
export const makeStatePropertys = <T>(obj: T): T => {
    const nObj = Object.assign({}, obj) as any;
    const rObj = {} as any;
    Object.getOwnPropertyNames(nObj).forEach(it => {
        const [data, setData] = useState(nObj[it]);
        rObj[`__data__${it}`] = data;
        rObj[`__setData__${it}`] = setData;
        Object.defineProperty(rObj, it, {
            get(): any {
                return rObj[`__data__${it}`];
            },
            set(v: any) {
                return rObj[`__setData__${it}`](v);
            }
        })
    });
    return rObj;
}