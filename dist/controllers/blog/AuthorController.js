"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_mvc_ts_1 = require("express-mvc-ts");
const Controller_1 = require("../Controller");
const database_1 = require("../../core/database");
let AuthorController = class AuthorController extends Controller_1.default {
    constructor() {
        super(database_1.Author);
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const authors = yield database_1.Author.findAll();
            return this.view('authors', { authors });
        });
    }
    /// 不能override BaseController的details路由
    details(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield database_1.Author.findById(id);
            return this.view('author', { author });
        });
    }
};
__decorate([
    express_mvc_ts_1.HttpGet('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "list", null);
__decorate([
    express_mvc_ts_1.HttpGet('details/:id'),
    __param(0, express_mvc_ts_1.FromRoute),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "details", null);
AuthorController = __decorate([
    express_mvc_ts_1.Inject,
    express_mvc_ts_1.Route('author'),
    __metadata("design:paramtypes", [])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=AuthorController.js.map