import { describe, expect, it } from "vitest";
import { min } from "./min";

describe("min", () => {
  it("deve somar dois números", () => {
    expect(min(5, 3)).toBe(1);
  });
});
