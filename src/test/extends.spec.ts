

class Model<T> {
    public static findAll<T extends Model<T>>(){
        console.log('call Model findAll');
    }
}


class Author extends Model<Author>{

}

class Blog extends Model<Blog> {

}

interface IModel<T> {
    new() : T;
    findAll();
}

abstract class BaseService<T extends Model<T>>{
    constructor(private model: IModel<T>){
        
    }

    public findAll(){
        console.log('call BaseService findAll')
        // ??? how to call Blog or Author's findAll

        this.model.findAll();
    }
}

class AuthorService extends BaseService<Author>{

    constructor(){
        super(Author);
    }
}

class BlogService extends BaseService<Blog> {

}

const as = new AuthorService();
as.findAll();