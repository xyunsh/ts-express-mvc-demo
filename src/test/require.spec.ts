import * as A from './m.spec';
import { B } from './m.spec';

console.log("A============>", A);
console.log("required A ===========>", require('./m.spec'));
console.log("B============>", new B());