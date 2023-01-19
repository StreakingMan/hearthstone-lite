import { Hero } from './Hero';

export class Player {
    public hero: Hero;
    private hands: [];
    constructor(hero: Hero) {
        this.hero = hero;
    }
}
