function Father() {
    this.name = 'father'
}

Father.prototype.foo = function() {
    return 666
}

function Son() {
    Father.call(this)
}

Son.prototype = new Father()
var son = new Son();
son.name = 'son'
console.log('son==>', son.foo())

var son1 = new Son();
console.log('son1==>', son1.name)