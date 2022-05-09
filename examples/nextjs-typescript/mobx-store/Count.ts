import { makeObservable, observable, computed, action } from "mobx"

export class Count {
    @observable
    public number = 0;

    @action increase = () => {
        this.number++;
        console.log('---', this.number);
    }

    @action decrease = () => {
        this.number--;
        console.log('---', this.number);
    }
    constructor() {
        makeObservable(this);
    }
}

export default new Count();