import { Model } from 'sequelize-typescript';
import { Controller as MVCController, Inject, Request, Route, HttpGet, FromRoute, RouteResult} from 'express-mvc-ts';

export default abstract class Controller<T extends Model<T>> extends MVCController {  
    constructor(private model: typeof Model){
        super();
    }

    @HttpGet
    public async getAll(){
        const list : T[] = await this.model.findAll<T>({ limit: 10 });    
        return this.json(list);
    }

    @HttpGet('details/:id')
    public async details(@FromRoute id:number|string):Promise<RouteResult>{
        const o : T = await this.model.findById<T>(id);
        return this.json(o);
    }
}