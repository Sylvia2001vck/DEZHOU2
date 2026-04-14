"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachCaseRequest = void 0;
/**
 * Request for detaching security findings from their case.
 */
class DetachCaseRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DetachCaseRequest.attributeTypeMap;
    }
}
exports.DetachCaseRequest = DetachCaseRequest;
/**
 * @ignore
 */
DetachCaseRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DetachCaseRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DetachCaseRequest.js.map