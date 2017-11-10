"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function url(path) {
    return `/${path}`;
}
exports.url = url;
function authorDetails(author) {
    return url(`author/details/${author.id}`);
}
exports.authorDetails = authorDetails;
//# sourceMappingURL=url.js.map