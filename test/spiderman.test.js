const Spiderman = require("../app/spiderman");

describe("Unit Tests for Spiderman class", () => {
  test("1. Create an spiderman object", () => {
    const andrew = new Spiderman(
      "Spiderman Sony",
      38,
      "Andrew Garfield",
      3,
      "Sony"
    );

    expect(andrew.name).toBe("Spiderman Sony");
    expect(andrew.age).toBe(38);
    expect(andrew.actor).toBe("Andrew Garfield");
    expect(andrew.movies).toBe(3);
    expect(andrew.studio).toBe("Sony");
  });
  test("2. Use the method getInfo()", () => {
    const tom = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      7,
      "Marvel"
    );

    expect(tom.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
  });
});
