import { makeObservable, observable, computed, action } from "mobx"
import {intervalEventObservable} from "../rxjs";

export class EventCount {
    @observable
    public number = 0;

    @action increase = () => {
        this.number++;
        // console.log('---'+process.browser, this.number);
    }

    @action decrease = () => {
        this.number--;
        // console.log('---'+process.browser, this.number);
    }
    constructor() {
        makeObservable(this);
        if (process.browser) {
            intervalEventObservable.subscribe(it => {
                this.increase();
            })
        }
    }
}

export default new EventCount();