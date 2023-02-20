// unit tests for the exchanging between currencies

const {convertTo, convertFrom} = require("../public/exchanger.js");

test("Check if GBP => PLN works properly", () => {
    expect(convertFrom(5.5, 5)).toBe("1.10");
    expect(convertFrom(1, 3)).toBe("0.33");
    expect(convertFrom(10, 5.3)).toBe("1.89");
});

test("Check if GBP => PLN works properly", () => {
    expect(convertTo(1, 5)).toBe("5.00");
    expect(convertTo(1.2, 3)).toBe("3.60");
    expect(convertTo(0.01, 5.3)).toBe("0.05");
});

test("Edges cases for PLN => GBP exchange", () => {
    expect(convertFrom(NaN, 5)).toBe("");
    expect(convertFrom(1.2, NaN)).toBe("");
    expect(convertFrom(NaN, NaN)).toBe("");
});
