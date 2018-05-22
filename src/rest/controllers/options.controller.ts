import { Controller, Get, Post, Options, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

@Controller()
export class OptionsController{
    @Options('*')
    options(){
        return {};
    }
}