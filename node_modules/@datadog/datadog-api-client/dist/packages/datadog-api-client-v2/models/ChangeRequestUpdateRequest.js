"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestUpdateRequest = void 0;
/**
 * Request object to update a change request.
 */
class ChangeRequestUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestUpdateRequest.attributeTypeMap;
    }
}
exports.ChangeRequestUpdateRequest = ChangeRequestUpdateRequest;
/**
 * @ignore
 */
ChangeRequestUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestUpdateData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<ChangeRequestDecisionCreateItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestUpdateRequest.js.map