import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols } from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Blog } from '../../core/database';

@Inject
@Route('blog')
export class BlogController extends BaseController<Blog> {
    constructor(){
        super(Blog);
    }
}