import {ApiService, Request} from "./ApiService";

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export abstract class RpcBase<R = any | undefined> {
    constructor(private method: Method, private request: Request<R>) {
    }

    sendPromise() {
        switch (this.method) {
            case Method.GET: return new ApiService().get(this.request);
            // POST, DELETE...
        }
    };

}