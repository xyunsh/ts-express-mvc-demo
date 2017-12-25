export function url(path: string) : string {
    return `/${path}`;
}

export function employeeDetails(employee:{id:number}): string {
    return url(`employee/details/${employee.id}`);
}

export function employeeAdd() : string {
    return url('employee/add');
}