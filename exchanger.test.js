// unit tests for the exchanging between currencies

const {convertTo, convertFrom} = require("./public/exchanger.js");

test("Check if GBP => PLN works properly", () => {
    expect(convertTo(5.5, 5)).toBe("1.10");
});
