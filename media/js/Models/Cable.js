'use strict';

class Cable extends IDrawable {
    #canvas;
    #state;
    #start;
    #end;

    constructor(canvas, start, end) {
        super();

        this.#canvas = canvas;
        this.#start = start;
        this.#end = end;
        this.#state = State.Low();
    }

    draw() {
        let color;

        switch (this.#state.getValue()) {
            case State.Failure().getValue():
                color = 'rgb(127, 0, 0)';
                break;
            case State.Low().getValue():
                color = 'rgb(0, 0, 0)';
                break;
            case State.High().getValue():
                color = 'rgb(0, 127, 0)';
                break;
            default:
                throw new Error('Unknown state.');
        }

        this.#canvas.drawLine(this.#start, this.#end, color);
    }
}
