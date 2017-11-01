export interface IController {
    
}

export function getControllerName(controller: Function) {
    function lcFirst(str: string) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    return lcFirst((controller as any).name.replace(/Controller$/, ''));
}