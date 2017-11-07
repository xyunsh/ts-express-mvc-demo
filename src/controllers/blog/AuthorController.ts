import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols } from 'express-mvc-ts';

import BaseController from '../Controller';
import { Author } from '../../core/database';

declare interface IParams {
    a?: string;
    b?: string;
}

@Inject
@Route('author')
export class AuthorController extends BaseController {

    public constructor() {
        super();
    }

    @HttpGet('list')
    public async list(){
        const authors = await Author.findAll();

        return this.view('authors', {authors});
    }

    @HttpGet('query(/:id)')
    public async details(id: number){
        const author = await Author.getById(id);
    }
}