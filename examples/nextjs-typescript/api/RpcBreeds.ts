import {ApiService} from "./ApiService";
import {Method, RpcBase} from "./RpcBase";

export class RpcBreeds extends RpcBase<{ id: string, name: string }[]>{
    constructor(q: string) {
        super(Method.GET, {
            url: 'https://api.thecatapi.com/v1/breeds/search',
            data: {q}
        })
    }

}