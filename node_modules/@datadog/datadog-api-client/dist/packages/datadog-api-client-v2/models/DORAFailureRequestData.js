"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureRequestData = void 0;
/**
 * The JSON:API data.
 */
class DORAFailureRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureRequestData.attributeTypeMap;
    }
}
exports.DORAFailureRequestData = DORAFailureRequestData;
/**
 * @ignore
 */
DORAFailureRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORAFailureRequestAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureRequestData.js.map