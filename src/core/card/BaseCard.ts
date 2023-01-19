import { HeroClass } from '../Hero';

export enum Rarity {
    COMMON = '普通',
    RARE = '稀有',
    EPIC = '史诗',
    LEGENDARY = '传说',
}

export interface CardInfo {
    name: string;
    description: string;
    // TODO 水晶和铸币是否用同一字段？
    cost?: number;
    rarity: Rarity;
    // 没有职业的卡牌为中立卡牌
    heroClass?: HeroClass;
}

export class BaseCard implements CardInfo {
    private _id = '';
    readonly name;
    readonly description;
    readonly cost;
    readonly rarity;
    readonly heroClass;
    constructor(info: CardInfo) {
        this.name = info.name;
        this.description = info.description;
        this.cost = info.cost;
        this.rarity = info.rarity;
        this.heroClass = info.heroClass;
    }
    get id() {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }
}
