"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3Queue = void 0;
/**
 * Schema for queue entities.
 */
class EntityV3Queue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3Queue.attributeTypeMap;
    }
}
exports.EntityV3Queue = EntityV3Queue;
/**
 * @ignore
 */
EntityV3Queue.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "EntityV3APIVersion",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "EntityV3QueueDatadog",
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
        type: "EntityV3QueueKind",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "EntityV3Metadata",
        required: true,
    },
    spec: {
        baseName: "spec",
        type: "EntityV3QueueSpec",
    },
};
//# sourceMappingURL=EntityV3Queue.js.map