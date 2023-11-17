'use strict';

class Canvas {
    #canvasElement;
    #zoom = 1;

    constructor(canvasElement) {
        this.#canvasElement = canvasElement;
    }

    init() {
        this.#canvasElement.width = this.#canvasElement.clientWidth;
        this.#canvasElement.height = this.#canvasElement.clientHeight;

        this.#drawGrid();
    }

    drawLine(start, end, color = 'rgb(0, 0, 0)') {
        const ctx = this.#getContext();

        const direction = this.#getDirection(start, end);

        start = start.translate(
            this.getLineWidthOnGrid() / 2 * (-direction.getX()),
            this.getLineWidthOnGrid() / 2 * (-direction.getY()),
        );
        end = end.translate(
            this.getLineWidthOnGrid() / 2 * (direction.getX()),
            this.getLineWidthOnGrid() / 2 * (direction.getY()),
        );

        ctx.strokeStyle = color;
        ctx.lineWidth = this.#percentageToPixels(this.#getLineWidth());
        ctx.beginPath();
        ctx.moveTo(...this.#gridToPixels(start).toArray());
        ctx.lineTo(...this.#gridToPixels(end).toArray());
        ctx.stroke();
    }

    translateToGrid(percentage) {
        return percentage / this.#getGridSize();
    }

    getLineWidthOnGrid() {
        return this.translateToGrid(this.#getLineWidth());
    }

    #drawGrid() {
        const ctx = this.#getContext();

        ctx.strokeStyle = 'rgb(0, 0, 128)';
        ctx.lineWidth = 1;

        for (let x = 0; this.#gridToPixels(new Vector(x, 0)).getX() <= this.#canvasElement.width; ++x) {
            ctx.beginPath();
            ctx.moveTo(...this.#gridToPixels(new Vector(x, 0)).toArray());
            ctx.lineTo(...this.#gridToPixels(new Vector(x, this.#canvasElement.height)).toArray());
            ctx.stroke();
        }

        for (let y = 0; this.#gridToPixels(new Vector(0, y)).getY() <= this.#canvasElement.height; ++y) {
            ctx.beginPath();
            ctx.moveTo(...this.#gridToPixels(new Vector(0, y)).toArray());
            ctx.lineTo(...this.#gridToPixels(new Vector(this.#canvasElement.width, y)).toArray());
            ctx.stroke();
        }
    }

    #getLineWidth() {
        return this.#getGridSize() / 4;
    }

    #getContext() {
        if (!this.#canvasElement.getContext) {
            throw new Error('Canvas is not supported by your browser.');
        }

        return this.#canvasElement.getContext('2d');
    }

    #percentageToPixels(percentage) {
        return this.#zoom * this.#canvasElement.width * percentage / 100;
    }

    #gridToPixels(position) {
        return new Vector(
            this.#percentageToPixels(this.#getGridSize()) * position.getX(),
            this.#percentageToPixels(this.#getGridSize()) * position.getY(),
        );
    }

    #getGridSize() {
        return 2.5;
    }

    #getDirection(start, end) {
        const xDirection = end.getX() - start.getX();
        const yDirection = end.getY() - start.getY();

        return new Vector(
            xDirection ? xDirection / Math.abs(xDirection) : 0,
            yDirection ? yDirection / Math.abs(yDirection) : 0,
        );
    }
}
