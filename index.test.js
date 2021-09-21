const main = require("./index")

test("username value respected", () => {
    expect(main(User)).toBe("Peace");
});