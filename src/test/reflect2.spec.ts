
import "reflect-metadata";

const ControllerRoutesSymbol = Symbol.for("mvc:controller:routes")

class A {
    public m() { }
}

class B extends A {
    public mb() { }
}

class C extends A {
    public mc() { }
}

function attach(target, route) {
    let existingData = Reflect.getMetadata(ControllerRoutesSymbol, target);
    if( existingData === undefined){
        existingData = [];
    }
    
    existingData.push(route);

    Reflect.defineMetadata(ControllerRoutesSymbol, existingData, target);
};


function attach2(target, route) {
    let existingData = Reflect.getMetadata(ControllerRoutesSymbol, target);
    const data = existingData ? [...existingData,route] : [route];
    Reflect.defineMetadata(ControllerRoutesSymbol, data, target);
};


attach(A, "m");
attach(A, "m");
attach(B, "mb");
attach(B, "mb");
attach(C, "mc");
attach(C, "mc");
attach(C, "mc");


console.log(Reflect.getMetadata(ControllerRoutesSymbol, C));