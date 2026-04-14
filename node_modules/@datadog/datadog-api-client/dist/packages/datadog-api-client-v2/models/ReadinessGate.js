"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadinessGate = void 0;
/**
 * Used to merge multiple branches into a single branch.
 */
class ReadinessGate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReadinessGate.attributeTypeMap;
    }
}
exports.ReadinessGate = ReadinessGate;
/**
 * @ignore
 */
ReadinessGate.attributeTypeMap = {
    thresholdType: {
        baseName: "thresholdType",
        type: "ReadinessGateThresholdType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReadinessGate.js.map