import { BaseCard } from './cards/BaseCard';

export class Deck {
    private _cardList: BaseCard[];
    constructor() {
        this._cardList = [];
    }
    get length(): number {
        return this._cardList.length;
    }
    // 抽卡
}
