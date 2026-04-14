"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToSchema = void 0;
/**
 * Entity to detail schema relationship.
 */
class EntityToSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityToSchema.attributeTypeMap;
    }
}
exports.EntityToSchema = EntityToSchema;
/**
 * @ignore
 */
EntityToSchema.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipItem",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityToSchema.js.map