require('reflect-metadata');


@Reflect.metadata("design:paramtypes", "test")
class C {

    @Reflect.metadata("design:method", "bbbbb")
    method() {
        console.log('method M');
    }
}


console.log("A================>", Reflect.getMetadata("design:paramtypes", C));

const i = new C();

console.log("method=================>", Reflect.getMetadata("design:method", i, "method"));

function classDecorator<T extends { new(...args:any[]):{}}>(constructor: T){
    return class extends constructor {
        newProperty = 'new property';
        hello =  'override';
    }
}

@classDecorator 
class Greeter {
    property = "property";
    hello : string;

    constructor(m:string){
        this.hello = m;
    }
}
console.log(new Greeter("world"));