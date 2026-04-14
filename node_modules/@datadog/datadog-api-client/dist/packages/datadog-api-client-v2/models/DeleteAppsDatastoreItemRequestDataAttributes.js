"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemRequestDataAttributes = void 0;
/**
 * Attributes specifying which datastore item to delete by its primary key.
 */
class DeleteAppsDatastoreItemRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemRequestDataAttributes = DeleteAppsDatastoreItemRequestDataAttributes;
/**
 * @ignore
 */
DeleteAppsDatastoreItemRequestDataAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    itemKey: {
        baseName: "item_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsDatastoreItemRequestDataAttributes.js.map