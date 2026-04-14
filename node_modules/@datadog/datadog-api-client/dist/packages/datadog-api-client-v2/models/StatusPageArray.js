"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageArray = void 0;
class StatusPageArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageArray.attributeTypeMap;
    }
}
exports.StatusPageArray = StatusPageArray;
/**
 * @ignore
 */
StatusPageArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<StatusPageData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<StatusPageArrayIncluded>",
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
//# sourceMappingURL=StatusPageArray.js.map