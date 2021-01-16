const adminTest = require('./validateRole');



test('validar role  : undefine debe retornar false', () => {
    let user = { name: 'Users test' }
    expect(adminTest(user, undefined)).toBe(false);
});


test('validar role  : client debe retornar true', () => {
    let user = { name: 'Users test', role: 'client' }
    expect(adminTest(user, 'client')).toBe(true);
});

test('validar role  : client , user.role:admin debe retornar false', () => {
    let user = { name: 'Users test', role: 'admin' }
    expect(adminTest(user, 'client')).toBe(false);
});