// src/__tests__/utils.test.js

import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const currentYear = new Date().getFullYear();
    expect(ageOfPerson).toBe(currentYear - birthYear);
  });
});
