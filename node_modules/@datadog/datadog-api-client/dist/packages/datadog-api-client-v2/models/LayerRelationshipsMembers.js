"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerRelationshipsMembers = void 0;
/**
 * Holds an array of references to the members of a Layer, each containing member IDs.
 */
class LayerRelationshipsMembers {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LayerRelationshipsMembers.attributeTypeMap;
    }
}
exports.LayerRelationshipsMembers = LayerRelationshipsMembers;
/**
 * @ignore
 */
LayerRelationshipsMembers.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LayerRelationshipsMembersDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LayerRelationshipsMembers.js.map