"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionPolicy = void 0;
/**
 * Restriction policy object.
 */
class RestrictionPolicy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionPolicy.attributeTypeMap;
    }
}
exports.RestrictionPolicy = RestrictionPolicy;
/**
 * @ignore
 */
RestrictionPolicy.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionPolicyAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RestrictionPolicyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionPolicy.js.map