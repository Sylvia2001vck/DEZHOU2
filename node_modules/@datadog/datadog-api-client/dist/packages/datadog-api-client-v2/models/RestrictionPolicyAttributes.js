"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionPolicyAttributes = void 0;
/**
 * Restriction policy attributes.
 */
class RestrictionPolicyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionPolicyAttributes.attributeTypeMap;
    }
}
exports.RestrictionPolicyAttributes = RestrictionPolicyAttributes;
/**
 * @ignore
 */
RestrictionPolicyAttributes.attributeTypeMap = {
    bindings: {
        baseName: "bindings",
        type: "Array<RestrictionPolicyBinding>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionPolicyAttributes.js.map