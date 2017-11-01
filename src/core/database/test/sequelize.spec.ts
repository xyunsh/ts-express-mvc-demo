import { Author, sequelize, IAuthor } from '../';


Author.findAll<Author>({raw:true}).then(authors=>{
    console.log('authors===============>', authors);
});

