export default class A {

}

export class B {
    /**
     * mothodb
     */
    public mb() {
        console.log('mb');
    }
}

export class C extends B {
    /**
     * mc
     */
    public mc() {
        this.mb();
        console.log('mc');
    }
}

const c = new C();
c.mc();