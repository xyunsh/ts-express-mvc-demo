import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

import { IController, getControllerName } from './controller';

export interface ConstructorFor<T> {
    new (...params: any[]): T;
}

export interface ControllerInfo {
    name: string;
    instance: IController;
}

export class MvcApp {

}

namespace routing {
    
    const controllerFileMatcher = /([A-Za-z0-9]+)Controller\.js$/;

    export function setup(app: express.Application, options: SetupOptions = {}): MvcApp {

        const controllerDir = _.isString(options.controllerDir) ? [options.controllerDir] : options.controllerDir;

        const controllers : ControllerInfo[] = controllerDir.reduce((controllers: ControllerInfo[], dir) => {
            const _controllers = fs
                .readdirSync(dir)
                .filter(isImportable)
                .map(getFilenameWithoutExtension)
                .map(fileName => {
                    const fullPath = path.join(dir, fileName);
                    const module = require(fullPath);

                    if(!module[fileName] && !module.default){
                        throw new Error(`No default export defined for file ${fileName} or export does not satisfy filename`);
                    }

                    const controllerClass : ConstructorFor<IController> = module[fileName] || module.default;
                    let route: string = Reflect.getMetadata("", controllerClass);

                    if(route === undefined){
                        route = getControllerName(controllerClass);
                    }

                    return new ControllerInfo();
                })

            controllers.push(..._controllers);

            return controllers;
            
        }, []);

        const mvcApp = new MvcApp();

        mvcApp.controllers = controllers;
    }
}

function isImportable(file: string) : boolean {
    const filePart = file.slice(-3);
    return filePart === '.js' || (filePart === '.ts' && file.slice(-5) != '.d.ts');
}

function getFilenameWithoutExtension(file: string) : string {
    return path.parse(file).name;
}

export interface SetupOptions {
    controllerDir?: string[] | string;
    prefex?: string
}

export function setup(app: express.Application, options: SetupOptions = {}): MvcApp{
    return routing.setup(app, options);
}