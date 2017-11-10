export default class A {

}

export class B {
    /**
     * mothodb
     */
    public mb() {
        console.log('B mb');
    }
}

export class C extends B {
    /**
     * mc
     */
    public mb() {
        super.mb();
        console.log('C mb');
    }
}

const c = new C();
c.mb();