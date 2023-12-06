'use strict';

class Cable extends IElectricComponent, IDrawable {
    #canvas;
    #state;
    #start;
    #end;

    constructor(canvas, start, end) {
        super();

        this.#canvas = canvas;
        this.#start = start;
        this.#end = end;
        this.#state = ElectricalState.Open();
    }

    draw() {
        this.#canvas.drawLine(this.#start, this.#end, ColorHelper.getColorFromElectricalState(this.#state));
    }

    updateInternalState(active = true) {
        this.#state = active ? (ElectricalState.High) : ElectricalState.Low; // todo
    }
}
