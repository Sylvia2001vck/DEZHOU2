"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationResponse = void 0;
/**
 * Relation response data.
 */
class RelationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationResponse.attributeTypeMap;
    }
}
exports.RelationResponse = RelationResponse;
/**
 * @ignore
 */
RelationResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RelationAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "RelationMeta",
    },
    relationships: {
        baseName: "relationships",
        type: "RelationRelationships",
    },
    subtype: {
        baseName: "subtype",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RelationResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationResponse.js.map