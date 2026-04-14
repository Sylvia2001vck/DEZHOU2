"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialAPIKey = void 0;
/**
 * Partial Datadog API key.
 */
class PartialAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PartialAPIKey.attributeTypeMap;
    }
}
exports.PartialAPIKey = PartialAPIKey;
/**
 * @ignore
 */
PartialAPIKey.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PartialAPIKeyAttributes",
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
//# sourceMappingURL=PartialAPIKey.js.map