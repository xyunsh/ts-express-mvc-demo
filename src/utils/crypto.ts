import { createHash } from 'crypto';

export function md5(s){
    const hash = createHash('md5');

    hash.update(new Buffer(s, 'utf8'));

    return hash.digest('hex');
}