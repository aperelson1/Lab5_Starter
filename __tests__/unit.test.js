// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('testing isPhoneNumber(\'619-123-4567\')', () => {
    expect(isPhoneNumber('619-123-4567')).toBe(true);
});


test('testing isPhoneNumber(\'619-235-8437\')', () => {
    expect(isPhoneNumber('619-235-8437')).toBe(true);
});


test('testing isPhoneNumber(\'619-1234-6789\')', () => {
    expect(isPhoneNumber('61912346789')).toBe(false);
});


test('testing isPhoneNumber(\'619-235-91928\')', () => {
    expect(isPhoneNumber('61923591928')).toBe(false);
});

test('testing isEmail(\'aperelson@ucsd.edu\')', ()=> {
    expect(isEmail('aperelson@ucsd.edu')).toBe(true);
});


test('testing isEmail(\'aperelson@icloud.com\)', ()=> {
    expect(isEmail('aperelson@icloud.com')).toBe(true);
});

test('testing isEmail(\'aperelson@ucsd@edu\')', ()=> {
    expect(isEmail('aperelson@ucsd@edu')).toBe(false);
});


test('testing isEmail(\'aperelson@icloud#edu\')', ()=> {
    expect(isEmail('aperelson@icloud#edu')).toBe(false);
});

test('isStrongPassword(\'Secretpassword8\')', ()=> {
    expect(isStrongPassword('Secretpassword8')).toBe(true);
});

test('isStrongPassword(\'mySecretPass8\')', ()=> {
    expect(isStrongPassword('mySecretPass8')).toBe(true);
});


test('isStrongPassword(\'1mySecretPass8\')', ()=> {
    expect(isStrongPassword('1mySecretPass8')).toBe(false);
});


test('isStrongPassword(\'mySecretPassword8\')', ()=> {
    expect(isStrongPassword('mySecretPassword8')).toBe(false);
});

test('isDate(\'12/25/2024\')', ()=> {
    expect(isDate('12/25/2024')).toBe(true);
});

test('isDate(\'9/25/2023\')', ()=> {
    expect(isDate('9/25/2023')).toBe(true);
});

test('isDate(\'9/25/23\')', ()=> {
    expect(isDate('9/25/23')).toBe(false);
});

test('isDate(\'25/2023\')', ()=> {
    expect(isDate('25/2023')).toBe(false);
});

test('isHexColor(\'#FF5733\')', ()=> {
    expect(isHexColor('#FF5733')).toBe(true);
});

test('isHexColor(\'A3F\')', ()=> {
    expect(isHexColor('A3F')).toBe(true);
});

test('isHexColor(\'#GG5733\')', ()=> {
    expect(isHexColor('#GG5733')).toBe(false);
});

test('isHexColor(\'#FF573\')', ()=> {
    expect(isHexColor('#FF573')).toBe(false);
});
