class fakePromise {
    constructor(func) {
        setTimeout(() => {
            func(this.resolve, this.reject);
        });
    }

    then(func) {
        func();
    }
    catch(func) {
        func();
    }

    resolve(data) {
        console.log('resolved', data);
        this.then();
    }
    reject() {
        console.log('rejected');
        this.catch();
    }
}



const a = new fakePromise((res, rej) => {
    res('res in body');
    console.log('dsfsd');
}).then(data => {
    console.log('then with', data);
})