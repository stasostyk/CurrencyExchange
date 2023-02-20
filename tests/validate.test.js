// unit tests for the exchanging between currencies

const {isMonetaryFormat, clearFormatting} = require("../public/validate.js");

test("Test the monetary format checker", () => {
    expect(isMonetaryFormat(".")).toBe(true);
    expect(isMonetaryFormat("1.01")).toBe(true);
    expect(isMonetaryFormat(".00")).toBe(true);
});

test("Test format clearer", () => {
    expect(clearFormatting(".111")).toBe(".11");
    expect(clearFormatting("12a")).toBe("12");
    expect(clearFormatting("111.000")).toBe("111.00");
});
