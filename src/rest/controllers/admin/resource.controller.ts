import {
    Controller,
    Get,
    Post,
    HttpCode,
    Body,
    Param,
    Render,
    Inject,
    UseGuards,
} from "@nestjs/common";
//import { AuthGuard } from "@nestjs/passport";
import {
    Resource,
    Privilege,
    BindResource,
    Resources,
    Privileges,
    NeedPrivilege,
    LoginUser
} from "@admin";
import { resultOK, Result } from "@utils/result";

import BaseController from "@rest/base.controller";

@Controller("admin/resource")
@BindResource(Resources.Sys)
export class ResourceController extends BaseController<Resource> {
    constructor(
        @Inject("ResourceRepository") private readonly repo: typeof Resource,
        @Inject("PrivilegeRepository") private readonly privilegeRepo: typeof Privilege
    ) {
        super(repo);
    }

    @Get("query")
    @NeedPrivilege(Privileges.Browse)
    //@UseGuards(AuthGuard("jwt"))
    public async query(@Body() inputs, @LoginUser() user) {

        console.log('user',user);

        const { offset = 0, limit = 10, order = [["id", "DESC"]] } = inputs;

        const { count, rows } = await this.repo.findAndCount({
            offset,
            limit,
            order
        });

        return resultOK({
            total: count,
            count: limit,
            entities: rows
                .map(el => el.get({ plain: true }))
                .map(({ privileges, ...rest }) => ({
                    ...rest,
                    privileges: privileges ? privileges.map(p => p.id) : []
                }))
        });
    }

    @Post("modify")
    public async modify(@Body() inputs) {
        const { id, privileges, ...attrs } = inputs;

        if (id) {
            const o = await this.repo.findById(id);

            await o.update(attrs);

            await Promise.all(
                o.privileges.map(async p => {
                    const exists = privileges.find(pid => pid === p.id);

                    if (!exists) {
                        await o.$remove("privilege", p);
                    }
                })
            );

            await Promise.all(
                privileges.map(async pid => {
                    const priv = o.privileges.find(_p => _p.id === pid);

                    if (!priv) {
                        const privilege = await this.privilegeRepo.findById(
                            pid
                        );
                        await o.$add("privilege", privilege);
                    }
                })
            );

            const po = (await this.repo.findById(id)).get({ plain: true });

            po.privileges = po.privileges.map(p => p.id);

            return resultOK(po);
        } else {
            const o = await this.repo.create(attrs);

            return resultOK(o);
        }
    }
}
