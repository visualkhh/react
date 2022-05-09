import {intervalEventObservable} from "../rxjs";
import {makeEffectObservable, makeStatePropertys, makeStateValue} from "../hooks";
import {useState} from "react";
export default () => {
    // const [data2, setData2] = useState(0);
    const dataContainer = makeStatePropertys({name: 'z', age: 55, cnt: 0});
    // const data = makeStateValue(0)

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
