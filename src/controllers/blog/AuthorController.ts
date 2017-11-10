import { Inject, HttpGet, Route, Controller, FromQuery, FromRoute, MetadataSymbols, RouteResult, HttpPost, FromBody} from 'express-mvc-ts';
import { Model } from 'sequelize-typescript';

import BaseController from '../Controller';
import { Author } from '../../core/database';

@Inject
@Route('author')
export class AuthorController extends BaseController<Author> {
    constructor(){
        super(Author);
    }

    @HttpGet('list')
    public async list(){
        const authors = await Author.findAll<Author>();

        return this.view('authors', {authors});
    }

    @HttpGet('details/:id')
    public async details(@FromRoute id: number) : Promise<RouteResult>{
        const author : Author = await Author.findById<Author>(id);
        return this.view('author', {author});
    }

    @HttpGet
    public async add() {
        return this.view('add');
    }

    @HttpPost('add')
    public async insert(@FromBody author:Author){
        const result = await Author.insertOrUpdate(author);

        return this.redirect('/author/list');
    }
}