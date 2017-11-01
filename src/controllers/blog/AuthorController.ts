import { Inject, HttpGet, Route, Controller } from 'express-mvc-ts';

import BaseController from '../Controller';
import { Author } from '../../core/database';

@Inject
@Route('author')
export class AuthorController extends BaseController {

    public constructor() {
        super();
    }

    @HttpGet('q')
    public async findAll() {
        const result = await Author.findAll();

        return this.json(result);
    }

    @HttpGet('list')
    public async list(){
        const authors = await Author.findAll();

        return this.view('authors', {authors});
    }

    @HttpGet('view')
    public async home(){
        return this.view('home');
    }
}