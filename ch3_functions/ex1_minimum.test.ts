import { expect, test } from "bun:test";
import { min } from "./ex1_minimum";

test("my min matches Math.min for random numeric values", () => {
    for(let i: number = 0; i < 100; i++) {
        let a = Math.random();
        let b = Math.random();

        expect(Math.min(a, b) === min(a, b));
    }
});