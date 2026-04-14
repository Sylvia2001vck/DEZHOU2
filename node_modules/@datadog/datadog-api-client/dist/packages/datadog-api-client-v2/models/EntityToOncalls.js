"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToOncalls = void 0;
/**
 * Entity to oncalls relationship.
 */
class EntityToOncalls {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityToOncalls.attributeTypeMap;
    }
}
exports.EntityToOncalls = EntityToOncalls;
/**
 * @ignore
 */
EntityToOncalls.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityToOncalls.js.map