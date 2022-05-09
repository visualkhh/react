export type ApiHeader = {
    [key: string]: string
}
export type Request<T> = {
    url: string, headers?: ApiHeader, data?: any, fetchOption?: any,
    title?: string,
    responseCallBack?: (response: Response) => void,
    okCallBack?: (json: T) => void,
    noCallBack?: (error: any) => void,
    progress?: boolean
    successMsg?: boolean | string
    errorMsg?: boolean | string
    errorConsole?: boolean
    reissue?: boolean
    sendAuthorization?: boolean
}
export class ApiService {

    public get<T>({url, fetchOption = {}, headers = {}, data, title = '', responseCallBack, okCallBack, noCallBack, progress = true, successMsg = true, errorMsg = true, errorConsole = true, reissue = true, sendAuthorization = true}: Request<T>) {
        if (progress) {
            // open progress
        }
        if (sendAuthorization) {
            // set Header token
        }

        return new Promise<T>(async (resolve, reject) => {
            try {
                const reponse = await fetch(url + (data ? '?' + new URLSearchParams(data).toString() : ''), {...fetchOption, method: 'GET', headers });
                if (reponse.ok) {
                    try {
                        const rdata = await reponse.json();
                        if (successMsg) {/* success alert */}
                        resolve(rdata)
                    } catch (e) {
                        if (errorMsg) {/* error alert */ }
                        return reject(new Error(`server Response json Error`));
                    }
                } else {
                    if (errorMsg) {/* error alert */ }
                    return reject(new Error(`server Response Not OK`));
                }
            } catch (e) {
                if (errorMsg) {/* error alert */ }
                return reject(new Error(`server Communication Error`));
            }
        });
    }

    // post, delete....
}