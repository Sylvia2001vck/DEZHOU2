"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3Datastore = void 0;
/**
 * Schema for datastore entities.
 */
class EntityV3Datastore {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3Datastore.attributeTypeMap;
    }
}
exports.EntityV3Datastore = EntityV3Datastore;
/**
 * @ignore
 */
EntityV3Datastore.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "EntityV3APIVersion",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "EntityV3DatastoreDatadog",
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
        type: "EntityV3DatastoreKind",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "EntityV3Metadata",
        required: true,
    },
    spec: {
        baseName: "spec",
        type: "EntityV3DatastoreSpec",
    },
};
//# sourceMappingURL=EntityV3Datastore.js.map