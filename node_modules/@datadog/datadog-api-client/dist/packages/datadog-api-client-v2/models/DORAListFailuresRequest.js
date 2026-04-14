"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListFailuresRequest = void 0;
/**
 * Request to get a list of incidents.
 */
class DORAListFailuresRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListFailuresRequest.attributeTypeMap;
    }
}
exports.DORAListFailuresRequest = DORAListFailuresRequest;
/**
 * @ignore
 */
DORAListFailuresRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORAListFailuresRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAListFailuresRequest.js.map