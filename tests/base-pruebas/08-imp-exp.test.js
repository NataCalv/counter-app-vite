import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

});

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        
        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();

    });

});

//Tareas:
describe('Pruebas en 08-imp-exp', () => {
    test('getHeroesByOwner debe de retornar héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 3 );
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

});

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroesByOwner debe de retornar héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

});