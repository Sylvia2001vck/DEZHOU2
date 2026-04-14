"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedOncall = void 0;
/**
 * Included oncall.
 */
class EntityResponseIncludedOncall {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedOncall.attributeTypeMap;
    }
}
exports.EntityResponseIncludedOncall = EntityResponseIncludedOncall;
/**
 * @ignore
 */
EntityResponseIncludedOncall.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseIncludedRelatedOncallAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EntityResponseIncludedOncallType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedOncall.js.map