import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols } from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Department } from '../../core/database';

@Inject
@Route('dept')
export class DepartmentController extends BaseController<Department> {
    constructor(){
        super(Department);
    }

    @HttpGet('list')
    public async list(){
        const depts = await Department.findAll<Department>({ limit: 1 });

        console.log('depts', depts);

        return this.json( { depts } );
    }
}