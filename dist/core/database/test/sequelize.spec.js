"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
_1.Actor.findAll({ raw: true }).then(actors => {
    console.log('actors===============>', actors);
});
//# sourceMappingURL=sequelize.spec.js.map