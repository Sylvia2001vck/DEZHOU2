"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestBranchCreateRequest = void 0;
/**
 * Request object to create a branch for a change request.
 */
class ChangeRequestBranchCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestBranchCreateRequest.attributeTypeMap;
    }
}
exports.ChangeRequestBranchCreateRequest = ChangeRequestBranchCreateRequest;
/**
 * @ignore
 */
ChangeRequestBranchCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestBranchCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestBranchCreateRequest.js.map