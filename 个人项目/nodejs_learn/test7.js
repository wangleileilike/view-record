class Father {
    static money = '898989';
    constructor() {
        this.name = 'sb';
        this.age = 22;
    }

    foo() {
        console.log('menty-->', this)
    }
}

console.log('Father.money===>', Father.money)