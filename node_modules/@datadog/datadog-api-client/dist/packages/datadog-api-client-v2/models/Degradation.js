"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Degradation = void 0;
class Degradation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Degradation.attributeTypeMap;
    }
}
exports.Degradation = Degradation;
/**
 * @ignore
 */
Degradation.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DegradationData",
    },
    included: {
        baseName: "included",
        type: "Array<DegradationIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Degradation.js.map