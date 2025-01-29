describe('Pruebas en <DemoComponent/>', () => {
    
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización de variables:
        const message1 = 'Hola Mundo';
    
        // 2. Acciones con las variables:
        const message2 = message1.trim();
    
        // 3. Observar el compertamiento:
        expect( message1 ).toBe( message2 );
    });
});