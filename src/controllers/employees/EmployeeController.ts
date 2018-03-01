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

    @HttpGet('details/:id')
    public async details(@FromRoute id: number) : Promise<RouteResult>{
        const employee : Employee = await Employee.findById<Employee>(id);

        return this.json( employee );

        //return this.view( 'employee', { employee } );
    }
}