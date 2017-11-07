import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols } from 'express-mvc-ts';

import BaseController from '../Controller';
import { Author } from '../../core/database';

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

    @HttpGet(':id')
    public async details(@FromRoute id: number){
        const author = await Author.findById(id);

        return this.view('author', {author});
    }
}