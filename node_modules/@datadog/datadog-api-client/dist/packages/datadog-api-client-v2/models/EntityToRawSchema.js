"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToRawSchema = void 0;
/**
 * Entity to raw schema relationship.
 */
class EntityToRawSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityToRawSchema.attributeTypeMap;
    }
}
exports.EntityToRawSchema = EntityToRawSchema;
/**
 * @ignore
 */
EntityToRawSchema.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipItem",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityToRawSchema.js.map