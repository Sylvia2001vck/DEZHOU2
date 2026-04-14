"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationAttributes = void 0;
/**
 * Relation attributes.
 */
class RelationAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationAttributes.attributeTypeMap;
    }
}
exports.RelationAttributes = RelationAttributes;
/**
 * @ignore
 */
RelationAttributes.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "RelationEntity",
    },
    to: {
        baseName: "to",
        type: "RelationEntity",
    },
    type: {
        baseName: "type",
        type: "RelationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationAttributes.js.map