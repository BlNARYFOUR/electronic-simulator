'use strict';

class ColorHelper {
    static getColorFromElectricalState(state) {
        switch (state.getValue()) {
            case ElectricalState.Open().getValue():
                return Color.Red();
            case ElectricalState.Low().getValue():
                return Color.Black();
            case ElectricalState.High().getValue():
                return Color.Green();
            default:
                throw new Error('Unknown state.');
        }
    }
}
