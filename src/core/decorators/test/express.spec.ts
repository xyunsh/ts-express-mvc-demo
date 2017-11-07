import 'reflect-metadata';

function meta (target: any, propertyKey: string) {
    let type = Reflect.getMetadata('design:type', target, propertyKey);
    let paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
    let returntype = Reflect.getMetadata('design:returntype', target, propertyKey);
    let keys = Reflect.getMetadataKeys( target, propertyKey);
    
    console.log('keys===>', keys);
    console.log('type===>', type);
    console.log('paramtypes===>', paramtypes);
    console.log('returntype===>', returntype);
}

function sealed(constructor: Function){

}

@sealed
class User {
    @meta
    say ( myName: string) : string {
        const l = /([A-Za-z0-9]+)Controller\.[j|t]s$/.exec('MMController.js')![1];
        console.log(l);
        return `hello, ${myName}`;
    }
}

const user = new User();

user.say('tome');