export enum HeroClass {
    DEMON_HUNTER = '恶魔猎手',
    DRUID = '德鲁伊',
    HUNTER = '猎人',
    MAGE = '法师',
    PALADIN = '圣骑士',
    PRIEST = '牧师',
    ROGUE = '潜行者',
    SHAMAN = '萨满祭司',
    WARLOCK = '术士',
    WARRIOR = '战士',
}

export class Hero {
    public heroClass: HeroClass;
    constructor(heroClass: HeroClass) {
        this.heroClass = heroClass;
    }
}
