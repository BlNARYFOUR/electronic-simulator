'use strict';

class Mosfet extends IDrawable {
    #canvas;
    #position;
    #gateState;
    #sourceState;
    #drainState;

    constructor(canvas, position) {
        super();

        this.#canvas = canvas;
        this.#position = position;
        this.#gateState = ElectricalState.Open();
        this.#sourceState = ElectricalState.Open();
        this.#drainState = ElectricalState.Open();
    }

    draw() {
        this.#canvas.drawLine(this.#position, this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, 0), ColorHelper.getColorFromElectricalState(this.#gateState));
        this.#canvas.drawLine(this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, -1), this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, 1));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), -1), this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), 1));
        this.#canvas.drawLine(this.#position.translate(2, -1), this.#position.translate(2, -2), ColorHelper.getColorFromElectricalState(this.#drainState));
        this.#canvas.drawLine(this.#position.translate(2, 1), this.#position.translate(2, 2), ColorHelper.getColorFromElectricalState(this.#sourceState));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), -1), this.#position.translate(2, -1));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), 1), this.#position.translate(2, 1));
    }
}
