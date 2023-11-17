'use strict';

class State extends Enum {
    static Low() {
        return State.create(0);
    }

    static High() {
        return State.create(1);
    }

    static Failure() {
        return State.create(-1);
    }
}
