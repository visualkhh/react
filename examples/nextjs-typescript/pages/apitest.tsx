import {useCallback, useEffect, useState} from "react";
import {RpcBreeds} from "../api/RpcBreeds";
import {RpcCategories} from "../api/RpcCategories";
import {RpcUser} from "../api/RpcUser";

export default () => {
    const [data, setData] = useState('-');
    const [categories, setCategories] = useState([] as {name: string}[]);
    const rpcBreeds = new RpcBreeds('Abyssinian');
    const rpcCategories = new RpcCategories(5);
    useEffect(() => {
        rpcBreeds.sendPromise()?.then(r => {
            setData(r[0].name);
        }).catch(it => {

        });
    }, []);

    new RpcUser('F').sendPromise()?.then(it => {
        setData(it[0].name);
    }).catch(e => {
        console.log('fail!')
    });
    // useEffect(() => {
    //     rpcCategories.sendPromise()?.then(r => {
    //         setCategories(r);
    //     });
    // }, []);
    return (
        <div className="text-3xl font-bold underline">
            <h1>api</h1>
            <div>
                <h3>*** Breeds</h3>
                <ul className={'text-sm'}>
                    <li>{data}</li>
                </ul>
                <hr/>
                <h3>**** Categorys</h3>
                <ul className={'text-sm'}>
                {categories.map((it, idx) => {
                    return <li key={idx}>{it.name}</li>
                })}
                </ul>
            </div>
        </div>
    );
}
