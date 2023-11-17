'use strict';

const init = () => {
    console.log('DOM Content loaded');

    const canvas = new Canvas(document.querySelector('#canvas'));
    canvas.init();

    const testMosfet = new Mosfet(canvas, new Vector(1, 3));
    const testCable = new Cable(canvas, new Vector(3, 5), new Vector(3, 7));

    testMosfet.draw();
    testCable.draw();
};

window.addEventListener('DOMContentLoaded', init);
