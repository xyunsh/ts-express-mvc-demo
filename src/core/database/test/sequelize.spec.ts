import { Actor, } from '../';


Actor.findAll<Actor>({raw:true}).then(actors=>{
    console.log('actors===============>', actors);
});

