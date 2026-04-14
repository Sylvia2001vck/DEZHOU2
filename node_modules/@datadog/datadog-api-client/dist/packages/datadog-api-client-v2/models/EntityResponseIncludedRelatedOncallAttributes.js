"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedOncallAttributes = void 0;
/**
 * Included related oncall attributes.
 */
class EntityResponseIncludedRelatedOncallAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedOncallAttributes.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedOncallAttributes = EntityResponseIncludedRelatedOncallAttributes;
/**
 * @ignore
 */
EntityResponseIncludedRelatedOncallAttributes.attributeTypeMap = {
    escalations: {
        baseName: "escalations",
        type: "Array<EntityResponseIncludedRelatedOncallEscalationItem>",
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRelatedOncallAttributes.js.map