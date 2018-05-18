import { Model } from 'sequelize-typescript';
import { Controller, Get, Post, HttpCode, Param } from '@nestjs/common';

export default abstract class BaseController<T extends Model<T>>{  
    constructor(private repository: typeof Model){

    }

    @Get('list')
    public async getAll(){
        const list : T[] = await this.repository.findAll<T>({ limit: 10 });    
        return list;
    }

    @Get('details/:id')
    public async details(@Param("id") id:number):Promise<T>{
        const o : T = await this.repository.findById<T>(id);
        return o;
    }
}