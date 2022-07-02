import {ApiService} from "./ApiService";
import {Method, RpcBase} from "./RpcBase";

export class RpcCategories extends RpcBase<{ name: string }[]>{
    constructor(limit: number) {
        super(Method.GET, {
            url: 'https://api.thecatapi.com/v1/categories',
            data: {limit}
        })
    }

}