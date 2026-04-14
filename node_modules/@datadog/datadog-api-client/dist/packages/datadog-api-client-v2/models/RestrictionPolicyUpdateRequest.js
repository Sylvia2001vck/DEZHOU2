"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionPolicyUpdateRequest = void 0;
/**
 * Update request for a restriction policy.
 */
class RestrictionPolicyUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionPolicyUpdateRequest.attributeTypeMap;
    }
}
exports.RestrictionPolicyUpdateRequest = RestrictionPolicyUpdateRequest;
/**
 * @ignore
 */
RestrictionPolicyUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RestrictionPolicy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionPolicyUpdateRequest.js.map