"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks = require("nunjucks");
function default_1(path, opts) {
    const env = nunjucks.configure(path, opts);
    const filters = opts.filters;
    if (filters) {
        Object.keys(filters).forEach(name => {
            env.addFilter(name, filters[name]);
        });
    }
    return env;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map