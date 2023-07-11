class fakePromise {
    constructor(func) {

        this.thenFunc = () => {};


        setTimeout(() => {
            func(this.resolve, this.reject);
        });
    }

    then(func) {
        console.log('saving then func');
        setTimeout(() => {
            this.thenFunc = func;
        });
    }
    catch(func) {
        func();
    }

    resolve(data) {
        console.log('resolved, msg:', data);
        console.log(this.thenFunc);
        // let thenFunc = this.then();
        debugger;
        this.thenFunc(data);
    }
    reject() {
        console.log('rejected');
        // this.catch();
    }
}



const a = new fakePromise((res, rej) => {
    console.log('inside promise');
    res('reslove massage');
}).then(data => {
    console.log('inside then');
})