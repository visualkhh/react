import {Dispatch, EffectCallback, useCallback, useMemo, SetStateAction, useEffect, useState} from "react";
import {Observable} from "rxjs";
import {StateValue} from "./state/StateValue";
import {Slice, SliceCaseReducers} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../redux-store";
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


export const useOneEffect = (effect: EffectCallback) => {
    useEffect(effect, []);
}
export const useOneCallback = <T extends Function>(callBack: T) => {
    return useCallback(callBack, []);
}
export const useOneMemo = <T>(factory: () => T) => {
    return useMemo(factory, []);
}

export const useOneMemoEffectDestroy = <T>(factory: () => T, destroyEffect: (it: T) => void) => {
    const t = useMemo(factory, []);
    useEffect(() => {
        return () => {destroyEffect(t)};
    }, [])
    return t;
}
export const useOneMemoEffect = <T>(factory: () => T, effect: (it: T) => () => void) => {
    const t = useMemo(factory, []);
    useEffect(() => effect(t), [])
    return t;
}

export const useStateValue = <T>(initialState: T): {value: T} => {
    const [data, setData] = useState(initialState);
    const rObj = {value: data, __data__value: data, __setData__value: setData};
    Object.defineProperty(rObj, 'value', {
        get(): any {
            return rObj[`__data__value`];
        },
        set(v: any) {
            return rObj[`__setData__value`](v);
        }
    })
    return rObj;
}


export const useReduxSlice = <S, R extends SliceCaseReducers<S> = SliceCaseReducers<S>, N extends string = string>(slice: Slice<S, R, N>) => {
    const actions = slice.actions;
    const state = useSelector((states: any) => {
        return (states as any)[slice.name]
    }) as S;
    const rObj = {name: slice.name, state}
    const dispatch = useDispatch<AppDispatch>();
    for (const actionsKey in actions) {
        const action = actions[actionsKey];
        (rObj as any)[actionsKey] = (...props: any[]) => {
            dispatch((action as any)(...props));
        }
    }
    return rObj as ({state: S, name: N} & typeof actions);
}
