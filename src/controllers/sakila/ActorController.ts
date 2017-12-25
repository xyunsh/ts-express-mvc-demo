import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols } from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Actor } from '../../core/database';

@Inject
@Route('actor')
export class ActorController extends BaseController<Actor> {
    constructor(){
        super(Actor);
    }
}