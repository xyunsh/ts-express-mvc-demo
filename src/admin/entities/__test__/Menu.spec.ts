import { Menu } from '../Menu';

describe('Menu', () => {

    let menu: Menu;

    beforeEach(()=>{
        menu = new Menu();
    });


    describe('findAll', ()=>{
        it('should return all menus', async () =>{

            const result = ["test"];

            jest.spyOn(menu, 'findAll').mockImplementation(()=>[]);

            expect(await menu.findAll()).toBe(result);
        });
    });
});