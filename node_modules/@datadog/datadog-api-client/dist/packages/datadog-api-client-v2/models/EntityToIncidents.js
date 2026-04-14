"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToIncidents = void 0;
/**
 * Entity to incidents relationship.
 */
class EntityToIncidents {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityToIncidents.attributeTypeMap;
    }
}
exports.EntityToIncidents = EntityToIncidents;
/**
 * @ignore
 */
EntityToIncidents.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityToIncidents.js.map