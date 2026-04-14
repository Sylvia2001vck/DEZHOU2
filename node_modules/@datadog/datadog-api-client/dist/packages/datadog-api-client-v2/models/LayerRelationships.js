"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerRelationships = void 0;
/**
 * Holds references to objects related to the Layer entity, such as its members.
 */
class LayerRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LayerRelationships.attributeTypeMap;
    }
}
exports.LayerRelationships = LayerRelationships;
/**
 * @ignore
 */
LayerRelationships.attributeTypeMap = {
    members: {
        baseName: "members",
        type: "LayerRelationshipsMembers",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LayerRelationships.js.map