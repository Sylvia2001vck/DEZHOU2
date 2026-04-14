"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionPolicyResponse = void 0;
/**
 * Response containing information about a single restriction policy.
 */
class RestrictionPolicyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionPolicyResponse.attributeTypeMap;
    }
}
exports.RestrictionPolicyResponse = RestrictionPolicyResponse;
/**
 * @ignore
 */
RestrictionPolicyResponse.attributeTypeMap = {
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
//# sourceMappingURL=RestrictionPolicyResponse.js.map