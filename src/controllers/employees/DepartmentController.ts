import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols, RouteResult } from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Department } from '../../core/database';

@Inject
@Route('dept')
export class DepartmentController extends BaseController<Department> {
    constructor(){
        super(Department);
    }
    
    @HttpGet('details/:id')
    public async details(@FromRoute id: string) : Promise<RouteResult>{
        const dept : Department = await Department.findById<Department>(id);

        return this.json( dept );

        //return this.view( 'employee', { employee } );
    }
}


//console.log("DepartmentController.prototype", DepartmentController.prototype, Controller.prototype);