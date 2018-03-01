import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols, RouteResult } from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { User } from '../../core/database';

@Inject
@Route('user')
export class UserController extends BaseController<User> {
    constructor(){
        super(User);
    }

    @HttpGet('list')
    public async list(){
        const users = await User.findAll<User>();

        return this.json( { users } );
    }

    @HttpGet('details/:id')
    public async details(@FromRoute id: number) : Promise<RouteResult>{
        const user : User = await User.findById<User>(id);

        return this.json( user );
    }
}