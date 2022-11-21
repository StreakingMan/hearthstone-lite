import { BaseCard, CardInfo } from './BaseCard';

interface MinionInfo extends CardInfo {
    health: number;
    attack: number;
}

export class Minion extends BaseCard implements MinionInfo {
    readonly health: number;
    readonly attack: number;
    constructor(info: MinionInfo) {
        super(info);
        this.health = info.health;
        this.attack = info.attack;
    }
}
