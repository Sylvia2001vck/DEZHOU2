"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullApplicationKey = void 0;
/**
 * Datadog application key.
 */
class FullApplicationKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullApplicationKey.attributeTypeMap;
    }
}
exports.FullApplicationKey = FullApplicationKey;
/**
 * @ignore
 */
FullApplicationKey.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FullApplicationKeyAttributes",
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
//# sourceMappingURL=FullApplicationKey.js.map