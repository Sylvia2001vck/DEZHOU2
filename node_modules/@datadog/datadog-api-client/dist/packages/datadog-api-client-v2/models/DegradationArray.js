"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationArray = void 0;
class DegradationArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationArray.attributeTypeMap;
    }
}
exports.DegradationArray = DegradationArray;
/**
 * @ignore
 */
DegradationArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DegradationData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<DegradationIncluded>",
    },
    meta: {
        baseName: "meta",
        type: "PaginationMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationArray.js.map