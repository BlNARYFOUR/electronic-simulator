'use strict';

class Resistor extends IDrawable {
    #canvas;
    #position;
    #connectionOne;
    #connectionTwo;

    constructor(canvas, position) {
        super();

        this.#canvas = canvas;
        this.#position = position;
        this.#connectionOne = ElectricalState.Open();
        this.#connectionTwo = ElectricalState.Open();
    }

    draw() {
        this.#canvas.drawLine(this.#position, this.#position.translate(0, 1), ColorHelper.getColorFromElectricalState(this.#connectionOne));
        this.#canvas.drawLine(this.#position.translate(0, 4), this.#position.translate(0, 5), ColorHelper.getColorFromElectricalState(this.#connectionTwo));
        this.#canvas.drawLine(this.#position.translate(-0.5, 1), this.#position.translate(0.5, 1));
        this.#canvas.drawLine(this.#position.translate(-0.5, 4), this.#position.translate(0.5, 4));
        this.#canvas.drawLine(this.#position.translate(-0.5, 1), this.#position.translate(-0.5, 4));
        this.#canvas.drawLine(this.#position.translate(0.5, 1), this.#position.translate(0.5, 4));
    }
}
