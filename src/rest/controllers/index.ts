import admin from './admin';
import employees from './employees'
import { OptionsController } from './options.controller';

export default [
    ...employees,
    ...admin,

    OptionsController
]