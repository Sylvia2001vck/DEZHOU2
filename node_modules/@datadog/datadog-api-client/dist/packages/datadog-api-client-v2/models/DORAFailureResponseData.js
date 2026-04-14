"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureResponseData = void 0;
/**
 * Response after receiving a DORA incident event.
 */
class DORAFailureResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureResponseData.attributeTypeMap;
    }
}
exports.DORAFailureResponseData = DORAFailureResponseData;
/**
 * @ignore
 */
DORAFailureResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DORAFailureType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureResponseData.js.map