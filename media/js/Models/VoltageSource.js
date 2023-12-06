'use strict';

class VoltageSource extends IDrawable {
    #canvas;
    #position;
    #state;

    constructor(canvas, position) {
        super();

        this.#canvas = canvas;
        this.#position = position;
        this.#state = ElectricalState.High();
    }

    draw() {
        this.#canvas.drawLine(this.#position.translate(-0.5, -1), this.#position.translate(0.5, -1), ColorHelper.getColorFromElectricalState(this.#state));
        this.#canvas.drawLine(this.#position.translate(0, -1), this.#position.translate(0, 0), ColorHelper.getColorFromElectricalState(this.#state));
    }
}
