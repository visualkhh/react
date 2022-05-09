import {ApiService} from "./ApiService";
import {Method, RpcBase} from "./RpcBase";

export class RpcUser extends RpcBase<{ name: string, age: number }[]>{
    constructor(gender: 'M'|'F') {
        super(Method.GET, {
            url: 'https://api.thecatapi.com/v1/users',
            data: {gender}
        })
    }

}