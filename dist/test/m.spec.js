"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
}
exports.default = A;
class B {
    /**
     * mothodb
     */
    mb() {
        console.log('B mb');
    }
}
exports.B = B;
class C extends B {
    /**
     * mc
     */
    mb() {
        super.mb();
        console.log('C mb');
    }
}
exports.C = C;
const c = new C();
c.mb();
//# sourceMappingURL=m.spec.js.map