'use strict';

class Vector {
    #x;
    #y;

    constructor(x, y) {
       this.#x = x;
       this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    toArray() {
        return [this.#x, this.#y];
    }

    translateX(x) {
        return this.#x + x;
    }

    translateY(y) {
        return this.#y + y;
    }

    translate(x, y) {
        return new Vector(this.translateX(x), this.translateY(y));
    }
}
