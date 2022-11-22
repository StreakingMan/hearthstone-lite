import { BaseCard } from './cards/BaseCard';
import {
    localGet,
    localSave,
    LocalStorageKey,
} from '../utils/localStorageOperator';
import { Hero, HeroClass } from './Hero';
import { cardMap } from '../objects/cards/cardMap';

interface StorageDeck {
    name: string;
    hero: HeroClass;
    cardList: BaseCard['name'][];
}

export class Deck {
    private _name!: string;
    private _hero!: Hero;
    private _cardList: BaseCard[];
    static _getStorage(): StorageDeck[] {
        const storageString = localGet(LocalStorageKey.DECK_LIST) || '[]';
        let deckList;
        try {
            deckList = JSON.parse(storageString);
        } catch (e) {
            console.error(e);
        }
        if (!Array.isArray(deckList))
            throw new Error('卡组存储数据读取错误，解析类型非数组');
        return deckList;
    }
    constructor(jsonString: string);
    constructor(name: string, hero: Hero);
    constructor(jsonStringOrName: string, hero?: Hero) {
        this._cardList = [];
        if (hero) {
            // 新卡组
            this._hero = hero;
            this._name = jsonStringOrName;
        } else {
            // 复原卡组
            try {
                const deck: StorageDeck = JSON.parse(jsonStringOrName);
                this._hero = new Hero(deck.hero);
                this._name = deck.name;
                /*this._cardList = deck.cardList.map(
                    (cardName) => new [cardMap[cardName]]()
                );*/
            } catch (e) {
                console.error('初始化卡组失败');
            }
        }
    }
    get length(): number {
        return this._cardList.length;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (Deck._getStorage().find((card) => card.name === value)) {
            throw new Error('卡组名称重复');
        }
        this._name = value;
    }
    save() {
        if (this.length !== 30) throw new Error('卡组未完成');
        const deckList = Deck._getStorage();
        deckList.push({
            name: this._name,
            hero: this._hero.heroClass,
            cardList: this._cardList.map((card) => card.name),
        });
        localSave(LocalStorageKey.DECK_LIST, JSON.stringify(deckList));
    }
    // 创建套牌时的方法

    // 游戏时的方法
    // 抽卡
}
