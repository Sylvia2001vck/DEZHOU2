"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerRelationshipsMembersDataItems = void 0;
/**
 * Represents a single member object in a layer's `members` array, referencing
 * a unique Datadog user ID.
 */
class LayerRelationshipsMembersDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LayerRelationshipsMembersDataItems.attributeTypeMap;
    }
}
exports.LayerRelationshipsMembersDataItems = LayerRelationshipsMembersDataItems;
/**
 * @ignore
 */
LayerRelationshipsMembersDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LayerRelationshipsMembersDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LayerRelationshipsMembersDataItems.js.map