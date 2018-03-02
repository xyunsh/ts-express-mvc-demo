"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./sequelize");
exports.employees = sequelize_1.employees;
exports.sakila = sequelize_1.sakila;
const Employee_1 = require("./employees/Employee");
exports.Employee = Employee_1.default;
const Department_1 = require("./employees/Department");
exports.Department = Department_1.default;
const Salary_1 = require("./employees/Salary");
exports.Salary = Salary_1.default;
const Actor_1 = require("./sakila/Actor");
exports.Actor = Actor_1.default;
const Address_1 = require("./sakila/Address");
exports.Address = Address_1.default;
const User_1 = require("./auth/User");
exports.User = User_1.default;
//# sourceMappingURL=index.js.map