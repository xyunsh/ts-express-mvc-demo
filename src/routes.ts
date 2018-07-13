import { Routes } from 'nest-router';

import { } from '@nestjs/core'

import { RestModule } from './rest.module';
import { MvcModule } from './mvc.module';

export const routes: Routes = [
    {
        path: '/api',
        module: RestModule
    },
    // {
    //     path: '/site',
    //     module: MvcModule
    // }
];