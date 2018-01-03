"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function url(path) {
    return `/${path}`;
}
exports.url = url;
function employeeDetails(employee) {
    return url(`employee/details/${employee.id}`);
}
exports.employeeDetails = employeeDetails;
function employeeAdd() {
    return url('employee/add');
}
exports.employeeAdd = employeeAdd;
//# sourceMappingURL=url.js.map