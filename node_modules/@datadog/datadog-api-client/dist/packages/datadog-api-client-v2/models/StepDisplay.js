"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepDisplay = void 0;
/**
 * The definition of `StepDisplay` object.
 */
class StepDisplay {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StepDisplay.attributeTypeMap;
    }
}
exports.StepDisplay = StepDisplay;
/**
 * @ignore
 */
StepDisplay.attributeTypeMap = {
    bounds: {
        baseName: "bounds",
        type: "StepDisplayBounds",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StepDisplay.js.map