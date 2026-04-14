"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionUpdateRequest = void 0;
/**
 * Request object to update a change request decision.
 */
class ChangeRequestDecisionUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionUpdateRequest.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionUpdateRequest = ChangeRequestDecisionUpdateRequest;
/**
 * @ignore
 */
ChangeRequestDecisionUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestDecisionUpdateData",
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
//# sourceMappingURL=ChangeRequestDecisionUpdateRequest.js.map