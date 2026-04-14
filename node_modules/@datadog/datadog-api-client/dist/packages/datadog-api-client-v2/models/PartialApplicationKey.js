"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialApplicationKey = void 0;
/**
 * Partial Datadog application key.
 */
class PartialApplicationKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PartialApplicationKey.attributeTypeMap;
    }
}
exports.PartialApplicationKey = PartialApplicationKey;
/**
 * @ignore
 */
PartialApplicationKey.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PartialApplicationKeyAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ApplicationKeyRelationships",
    },
    type: {
        baseName: "type",
        type: "ApplicationKeysType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PartialApplicationKey.js.map