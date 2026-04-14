"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentArray = void 0;
class StatusPagesComponentArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentArray.attributeTypeMap;
    }
}
exports.StatusPagesComponentArray = StatusPagesComponentArray;
/**
 * @ignore
 */
StatusPagesComponentArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<StatusPagesComponentData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<StatusPagesComponentArrayIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentArray.js.map