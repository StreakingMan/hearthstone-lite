import { test } from 'vitest';
import { BaseCard, Rarity } from '../../src/classes/cards/BaseCard';

test('base card test', () => {
    const a = new BaseCard({
        rarity: Rarity.COMMON,
        name: 'test',
        description: 'something',
    });
    console.log(a);
});
