"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseArray = void 0;
class EntityResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseArray.attributeTypeMap;
    }
}
exports.EntityResponseArray = EntityResponseArray;
/**
 * @ignore
 */
EntityResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PreviewEntityResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseArray.js.map