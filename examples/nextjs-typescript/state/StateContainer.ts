import {Dispatch, SetStateAction, useState} from "react";

export class StateValue<T> {
    private setData: Dispatch<SetStateAction<T>>;
    constructor(private _value: T) {
        const [data, setData] = useState(_value);
        this.setData = setData;
        this._value = data;
    }
    get value() {
        return this._value;
    }
    set value(value: T) {
        this.setData(value);
    }
}