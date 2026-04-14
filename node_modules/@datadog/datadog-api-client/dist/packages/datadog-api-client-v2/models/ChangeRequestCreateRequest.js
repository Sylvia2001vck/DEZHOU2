"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestCreateRequest = void 0;
/**
 * Request object to create a change request.
 */
class ChangeRequestCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestCreateRequest.attributeTypeMap;
    }
}
exports.ChangeRequestCreateRequest = ChangeRequestCreateRequest;
/**
 * @ignore
 */
ChangeRequestCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestCreateRequest.js.map