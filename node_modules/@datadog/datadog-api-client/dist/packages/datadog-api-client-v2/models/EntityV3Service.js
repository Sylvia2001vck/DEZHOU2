"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3Service = void 0;
/**
 * Schema for service entities.
 */
class EntityV3Service {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3Service.attributeTypeMap;
    }
}
exports.EntityV3Service = EntityV3Service;
/**
 * @ignore
 */
EntityV3Service.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "EntityV3APIVersion",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "EntityV3ServiceDatadog",
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
        type: "EntityV3ServiceKind",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "EntityV3Metadata",
        required: true,
    },
    spec: {
        baseName: "spec",
        type: "EntityV3ServiceSpec",
    },
};
//# sourceMappingURL=EntityV3Service.js.map