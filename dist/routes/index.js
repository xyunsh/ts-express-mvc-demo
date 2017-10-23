import * as express from 'express';
export default function setRouters(app) {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.render('index', { title: "express" });
    });
}
//# sourceMappingURL=index.js.map