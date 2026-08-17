import { describe, expect, it } from "vitest";
import { min } from "./min";

describe("min", () => {
  it("deve diminuir dois números", () => {
    expect(min(5, 3)).toBe(3);
  });
});
