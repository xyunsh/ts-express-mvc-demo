import { Model } from 'sequelize-typescript';
import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { resultOK, Result } from '@utils/result';

export default abstract class BaseController<T extends Model<T>>{  
    constructor(private repository: typeof Model){

    }

    @Get('list')
    public async getAll(){
        const list : T[] = await this.repository.findAll<T>({ limit: 10 });    
        return resultOK(list);
    }

    @Get('details/:id')
    public async details(@Param("id") id:number):Promise<Result>{
        const o : T = await this.repository.findById<T>(id);
        return resultOK(o);
    }

    @Post('query')
    public async query(){
        const limit = 10;

        const { count, rows } = await this.repository.findAndCount({
            limit
        });

        return resultOK({
            total: count,
            count: limit,
            entitis: rows
        });
    }

    @Post('modify')
    public async modify(@Body() inputs){
        const { id, ...rest } = inputs;

        let result = null;

        if(id){
            result = await this.repository.update(rest, {where:{id}});
        }else{
            result = await this.repository.create( rest );
        }
        
        return resultOK(result);
    }
}