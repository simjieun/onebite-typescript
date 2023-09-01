import { expect, it } from "vitest";
import {Equal, Expect} from "../helper";

const array = [
    {
        name: "Park",
    },
    {
        name: "Kim",
    },
];

// 1. reduce 뒤에 <Record<string, { name: string }>> 를 붙여서 타입을 지정해준다.
const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
    accum[item.name] = item;
    return accum;
}, {});

// 2. as 붙여서 타입 단언을 해준다.
const obj2 = array.reduce((accum, item) => {
    accum[item.name] = item;
    return accum;
}, {}) as Record<string, { name: string }>;

it("Should resolve to an object where name is the key", () => {
    expect(obj).toEqual({
        Park: {
            name: "Park",
        },
        Kim: {
            name: "Kim",
        },
    });

    type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
