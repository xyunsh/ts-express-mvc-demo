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
    public async query(@Body() inputs){
        const { offset = 0, limit = 10, order = [['id', 'DESC']] } = inputs;

        const { count, rows } = await this.repository.findAndCount({
            offset,
            limit,
            order
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

        if(id){
            await this.repository.update( rest, {where:{id}} );
            
            return resultOK(inputs);
        }else{
            const result = await this.repository.create( rest );

            return resultOK(result);
        }
    }
}