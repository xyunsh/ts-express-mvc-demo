export function url(path: string) : string {
    return `/${path}`;
}

export function employeeDetails(employee:{id:number}): string {
    return url(`emp/details/${employee.id}`);
}

export function employeeAdd() : string {
    return url('emp/add');
}