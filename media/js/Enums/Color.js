'use strict';

class Color extends Enum {
    static Red() {
        return Color.create('rgb(127, 0, 0)');
    }

    static Green() {
        return Color.create('rgb(0, 127, 0)');
    }

    static Black() {
        return Color.create('rgb(0, 0, 0)');
    }
}
