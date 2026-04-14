"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSTeamsIntegrationMetadata = void 0;
/**
 * Incident integration metadata for the Microsoft Teams integration.
 */
class MSTeamsIntegrationMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MSTeamsIntegrationMetadata.attributeTypeMap;
    }
}
exports.MSTeamsIntegrationMetadata = MSTeamsIntegrationMetadata;
/**
 * @ignore
 */
MSTeamsIntegrationMetadata.attributeTypeMap = {
    teams: {
        baseName: "teams",
        type: "Array<MSTeamsIntegrationMetadataTeamsItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MSTeamsIntegrationMetadata.js.map