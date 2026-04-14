"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullAPIKey = void 0;
/**
 * Datadog API key.
 */
class FullAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullAPIKey.attributeTypeMap;
    }
}
exports.FullAPIKey = FullAPIKey;
/**
 * @ignore
 */
FullAPIKey.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FullAPIKeyAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "APIKeyRelationships",
    },
    type: {
        baseName: "type",
        type: "APIKeysType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FullAPIKey.js.map