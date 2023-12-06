'use strict';

class ElectricalState extends Enum {
    static Low() {
        return ElectricalState.create(0);
    }

    static High() {
        return ElectricalState.create(1);
    }

    static Open() {
        return ElectricalState.create(-1);
    }
}
