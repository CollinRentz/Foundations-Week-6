const {returnTwo, greeting, add} = require('./functions');

test('ensure returnTwo returns 2', () => expect(returnTwo()).toBe(2));

describe("test greeting returns correct string", () => {
    test("greeting(James) returns correct string", () => expect(greeting("James")).toBe("Hello, James."));

    test("greeting(Jill) returns correct string", () => expect(greeting("Jill")).toBe("Hello, Jill."));
});

describe("test add to sum numbers", () => {
    test("add 1, 2 returns 3", () => expect(add(1,2)).toEqual(3));

    test("add 5, 9 returns 14", () => expect(add(5,9)).toEqual(14));
});