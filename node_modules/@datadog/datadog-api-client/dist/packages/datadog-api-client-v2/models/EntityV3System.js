"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3System = void 0;
/**
 * Schema for system entities.
 */
class EntityV3System {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3System.attributeTypeMap;
    }
}
exports.EntityV3System = EntityV3System;
/**
 * @ignore
 */
EntityV3System.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "EntityV3APIVersion",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "EntityV3SystemDatadog",
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
        type: "EntityV3SystemKind",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "EntityV3Metadata",
        required: true,
    },
    spec: {
        baseName: "spec",
        type: "EntityV3SystemSpec",
    },
};
//# sourceMappingURL=EntityV3System.js.map