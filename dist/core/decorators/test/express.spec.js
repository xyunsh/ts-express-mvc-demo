"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function meta(target, propertyKey) {
    let type = Reflect.getMetadata('design:type', target, propertyKey);
    let paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
    let returntype = Reflect.getMetadata('design:returntype', target, propertyKey);
    let keys = Reflect.getMetadataKeys(target, propertyKey);
    console.log('keys===>', keys);
    console.log('type===>', type);
    console.log('paramtypes===>', paramtypes);
    console.log('returntype===>', returntype);
}
function sealed(constructor) {
}
let User = class User {
    say(myName) {
        const l = /([A-Za-z0-9]+)Controller\.[j|t]s$/.exec('MMController.js')[1];
        console.log(l);
        return `hello, ${myName}`;
    }
};
__decorate([
    meta,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], User.prototype, "say", null);
User = __decorate([
    sealed
], User);
const user = new User();
user.say('tome');
//# sourceMappingURL=express.spec.js.map