import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import { Menu } from '@admin';
import { resultOK, hierarchize } from '@utils';

import BaseController from '../../base.controller';

@Controller('admin/menu')
export class MenuController extends BaseController<Menu>{
    constructor(
        @Inject('MenuRepository') private readonly menuRepository: typeof Menu,
    ){
        super(menuRepository);
    } 

    @Post('loadTreeSource')
    public async loadTreeSource(){
        const menus = await this.menuRepository.findAll({
            order:[['rank','asc']],
            raw: true
        });

        const source = hierarchize(menus);

        return resultOK(source);
    }

    @Post('saveLevels')
    public async saveLevels(@Body() inputs){
        
        const saveMenus = async function (repo,   menus : Array<any>, parent_id: null|number ) {
            for( let i = 0; i < menus.length; i++ ){
                const { id, children = [] } = menus[i];

                const menu = await repo.findById(id);

                await menu.update({ rank: i, parent_id });

                if( children.length> 0 ){
                    await saveMenus(repo, children, id);
                }
            }
        }

        await saveMenus(this.menuRepository, inputs, null);

        return resultOK();
    }
}