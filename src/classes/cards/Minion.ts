import { BaseCard, CardInfo } from './BaseCard';

export enum MinionType {
    MURLOC = '鱼人',
    DEMON = '恶魔',
    MECH = '机械',
    ELEMENTAL = '元素',
    BEAST = '野兽',
    TOTEM = '图腾',
    PIRATE = '海盗',
    DRAGON = '龙',
    QUILBOAR = '野猪人',
    NAGA = '纳迦',
    UNDEAD = '亡灵',
    ALL = '全部',
    NONE = '',
}

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
