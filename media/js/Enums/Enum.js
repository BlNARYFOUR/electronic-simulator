'use strict';

class Enum {
    static #isInternalConstructing = false;
    #value;

    constructor(value) {
        if (!Enum.#isInternalConstructing) {
            throw new TypeError("Enum is not constructable");
        }

        this.#value = value;
        Enum.#isInternalConstructing = false;
    }

    static create(value) {
        Enum.#isInternalConstructing = true;
        return new this(value);
    }

    getValue() {
        return this.#value;
    }
}
