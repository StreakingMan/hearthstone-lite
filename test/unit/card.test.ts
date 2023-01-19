import { test } from 'vitest';
import { BaseCard, Rarity } from '../../src/core/card/BaseCard';

test('base card test', () => {
    const a = new BaseCard({
        rarity: Rarity.COMMON,
        name: 'test',
        description: 'something',
    });
    console.log(a);
});
