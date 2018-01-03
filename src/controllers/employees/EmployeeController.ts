import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols, RouteResult, HttpPost, FromBody} from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Salary, Employee } from '../../core/database';

@Inject
@Route('emp')
export class EmployeeController extends BaseController<Employee> {
    constructor(){
        super(Employee);
    }

    @HttpGet('list')
    public async list(){
        const employees = await Employee.findAll<Employee>({ limit: 10});

        return this.json({ employees });
        //return this.view( 'employees', { employees } );
    }

    @HttpGet('details/:id')
    public async details(@FromRoute id: number) : Promise<RouteResult>{
        const employee : Employee = await Employee.findById<Employee>(id);

        return this.json( employee );

        //return this.view( 'employee', { employee } );
    }

    @HttpGet
    public async add() {
        return this.view('add');
    }

    @HttpPost('add')
    public async insert(@FromBody employee:Employee){
        const result = await Employee.insertOrUpdate(employee);

        return this.redirect('/employee/list');
    }
}