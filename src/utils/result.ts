export const OK = 200;

export class Result {
    constructor(
        private readonly code: number, 
        private readonly message: string, 
        private readonly data: any){

    }
}

export const result = ( code: number, message?: string, data?: any ) => {
    return new Result(code, message, data);
}

export const resultOK = (data?: any ) => {
    return result(OK, 'OK', data );
}

export const resultError = ( code: number, message?: string ) => {
    return result( code, message );
}