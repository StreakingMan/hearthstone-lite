import { expect, test } from 'vitest';

interface Obj {
    num: number;
}
const addNum = (obj: Obj) => {
    obj.num++;
};
const minusNum = (obj: Obj) => {
    obj.num--;
};

test('scene test example', () => {
    const obj = { num: 1 };
    addNum(obj);
    expect(obj.num).toBe(2);
    minusNum(obj);
    expect(obj.num).toBe(1);
});
