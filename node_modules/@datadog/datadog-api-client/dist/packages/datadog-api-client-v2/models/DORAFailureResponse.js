"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureResponse = void 0;
/**
 * Response after receiving a DORA incident event.
 */
class DORAFailureResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureResponse.attributeTypeMap;
    }
}
exports.DORAFailureResponse = DORAFailureResponse;
/**
 * @ignore
 */
DORAFailureResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORAFailureResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureResponse.js.map