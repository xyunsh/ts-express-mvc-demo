class Model {
    static findAll() {
        console.log('call Model findAll');
    }
}
class Author extends Model {
}
class Blog extends Model {
}
class BaseService {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        console.log('call BaseService findAll');
        // ??? how to call Blog or Author's findAll
        this.model.findAll();
    }
}
class AuthorService extends BaseService {
    constructor() {
        super(Author);
    }
}
class BlogService extends BaseService {
}
const as = new AuthorService();
as.findAll();
//# sourceMappingURL=extends.spec.js.map