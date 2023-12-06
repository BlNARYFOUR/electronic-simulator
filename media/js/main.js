'use strict';

const init = () => {
    console.log('DOM Content loaded');

    const canvas = new Canvas(document.querySelector('#canvas'));
    canvas.init();

    const circuit = new Circuit(canvas);

    circuit.addComponent(VoltageSource, 6, 2);
    circuit.addComponent(VoltageDrain, 6, 11);
    circuit.addComponent(Resistor, 6, 2);
    circuit.addComponent(Mosfet, 4, 9);
    circuit.addComponent(Cable, 6, 13, 6, 15);

    circuit.draw();
};

window.addEventListener('DOMContentLoaded', init);
