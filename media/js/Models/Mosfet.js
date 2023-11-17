'use strict';

class Mosfet extends IDrawable {
    #canvas;
    #position;

    constructor(canvas, position) {
        super();

        this.#canvas = canvas;
        this.#position = position;
    }

    draw() {
        console.log(this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, 0));

        this.#canvas.drawLine(this.#position, this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, 0));
        this.#canvas.drawLine(this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, -1), this.#position.translate(1 - this.#canvas.getLineWidthOnGrid() / 2, 1));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), -1), this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), 1));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), -1), this.#position.translate(2, -1));
        this.#canvas.drawLine(this.#position.translate(1 + this.#canvas.getLineWidthOnGrid(), 1), this.#position.translate(2, 1));
        this.#canvas.drawLine(this.#position.translate(2, -1), this.#position.translate(2, -2));
        this.#canvas.drawLine(this.#position.translate(2, 1), this.#position.translate(2, 2));
    }
}
