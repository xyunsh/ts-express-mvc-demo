export class Result {
    constructor(
        private readonly code: number, 
        private readonly message: string, 
        private readonly data: any){

    }
}

export const result = ( code: number, message: string, data: any ) => {
    return new Result(code, message, data);
}

export const resultOK = (data: any = null ) => {
    return result( 200, "OK", data);
}