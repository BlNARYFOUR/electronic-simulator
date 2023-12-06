'use strict';

class Circuit extends IDrawable {
    #canvas;
    #components;

    constructor(canvas) {
        super();

        this.#canvas = canvas;
        this.#components = [];
    }

    addComponent(componentClass, ...coordinates) {
        if (coordinates.length % 2 !== 0) {
            throw new Error('Make sure to add x and y coordinates. For a cable give the x and y coordinates for both ends');
        }

        const vectors = [];

        for (let i = 0; i < coordinates.length; i += 2) {
            vectors.push(new Vector(coordinates[i], coordinates[i + 1]));
        }

        this.#components.push(new componentClass(this.#canvas, ...vectors));
    }

    draw() {
        this.#components.forEach(component => component.draw());
    }
}
