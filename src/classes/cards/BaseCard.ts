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
}

export class BaseCard implements CardInfo {
    readonly name;
    readonly description;
    readonly cost;
    readonly rarity;
    constructor(info: CardInfo) {
        // for (const [key, value] of Object.entries(info)) {
        //     this[key] = value;
        // }
        this.name = info.name;
        this.description = info.description;
        this.cost = info.cost;
        this.rarity = info.rarity;
    }
}
