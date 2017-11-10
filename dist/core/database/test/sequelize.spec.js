"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
_1.Author.findAll({ raw: true }).then(authors => {
    console.log('authors===============>', authors);
});
//# sourceMappingURL=sequelize.spec.js.map