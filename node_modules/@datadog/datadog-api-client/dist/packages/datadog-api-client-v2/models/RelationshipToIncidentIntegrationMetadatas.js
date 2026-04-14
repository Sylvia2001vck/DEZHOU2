"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentIntegrationMetadatas = void 0;
/**
 * A relationship reference for multiple integration metadata objects.
 */
class RelationshipToIncidentIntegrationMetadatas {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentIntegrationMetadatas.attributeTypeMap;
    }
}
exports.RelationshipToIncidentIntegrationMetadatas = RelationshipToIncidentIntegrationMetadatas;
/**
 * @ignore
 */
RelationshipToIncidentIntegrationMetadatas.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToIncidentIntegrationMetadataData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentIntegrationMetadatas.js.map