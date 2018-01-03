import "reflect-metadata";

const ControllerRoutesSymbol = Symbol.for("mvc:controller:routes")

function HttpGet(route) {
    return function (target, propertyKey, descriptor) {
        let existingData = Reflect.getMetadata(ControllerRoutesSymbol, target.constructor);
        if( existingData === undefined){
            existingData = [];
        }

        console.log(target.constructor, propertyKey, descriptor, existingData);

        existingData.push(route);

        Reflect.defineMetadata(ControllerRoutesSymbol, existingData, target.constructor);

        return descriptor;
    };
}

class A {
    @HttpGet('m')
    public m() {}
}

class B extends A {
    @HttpGet('mb')
    public mb() {}
}

class C extends A {
    @HttpGet('mc')
    public mc() {}
}

console.log(Reflect.getMetadata(ControllerRoutesSymbol, A));
console.log(Reflect.getMetadata(ControllerRoutesSymbol, B));
console.log(Reflect.getMetadata(ControllerRoutesSymbol, C));