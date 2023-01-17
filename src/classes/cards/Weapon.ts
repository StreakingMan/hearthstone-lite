import { BaseCard, CardInfo } from './BaseCard';

interface WeaponInfo extends CardInfo {
    durability: number;
    attack: number;
}

export class Weapon extends BaseCard implements WeaponInfo {
    readonly durability: number;
    readonly attack: number;
    constructor(info: WeaponInfo) {
        super(info);
        this.durability = info.durability;
        this.attack = info.attack;
    }
}
