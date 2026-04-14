"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3API = void 0;
/**
 * Schema for API entities.
 */
class EntityV3API {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3API.attributeTypeMap;
    }
}
exports.EntityV3API = EntityV3API;
/**
 * @ignore
 */
EntityV3API.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "EntityV3APIVersion",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "EntityV3APIDatadog",
    },
    extensions: {
        baseName: "extensions",
        type: "{ [key: string]: any; }",
    },
    integrations: {
        baseName: "integrations",
        type: "EntityV3Integrations",
    },
    kind: {
        baseName: "kind",
        type: "EntityV3APIKind",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "EntityV3Metadata",
        required: true,
    },
    spec: {
        baseName: "spec",
        type: "EntityV3APISpec",
    },
};
//# sourceMappingURL=EntityV3API.js.map