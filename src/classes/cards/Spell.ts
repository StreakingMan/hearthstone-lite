import { BaseCard, CardInfo } from './BaseCard';

export enum SpellSchool {
    ARCANE = '奥术',
    FIRE = '火焰',
    FROST = '冰霜',
    HOLY = '神圣',
    NATURE = '自然',
    SHADOW = '暗影',
    FEL = '邪能',
}

interface SpellInfo extends CardInfo {
    school: SpellSchool;
}

export class Spell extends BaseCard implements SpellInfo {
    readonly school: SpellSchool;
    constructor(info: SpellInfo) {
        super(info);
        this.school = info.school;
    }
}
