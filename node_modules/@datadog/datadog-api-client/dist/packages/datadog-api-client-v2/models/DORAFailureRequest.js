"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureRequest = void 0;
/**
 * Request to create a DORA incident event.
 */
class DORAFailureRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureRequest.attributeTypeMap;
    }
}
exports.DORAFailureRequest = DORAFailureRequest;
/**
 * @ignore
 */
DORAFailureRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORAFailureRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureRequest.js.map