
const { default: testFunc } = await import("../");

describe("tests!", () => {
    test("test!", async () => {
        expect(testFunc()).toEqual(true);
    });
});
