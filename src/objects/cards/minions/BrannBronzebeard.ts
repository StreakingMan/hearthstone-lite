import { Minion } from '../../../classes/cards/Minion';
import { Rarity } from '../../../classes/cards/BaseCard';

export const BrannBronzebeard = new Minion({
    name: '布莱恩·铜须',
    description: '你的战吼会触发两次',
    rarity: Rarity.LEGENDARY,
    cost: 3,
    attack: 2,
    health: 4,
});
