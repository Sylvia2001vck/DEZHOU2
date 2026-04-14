"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadMetaSchemaField = void 0;
/**
 * Information about a specific column in the datastore schema.
 */
class ItemApiPayloadMetaSchemaField {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadMetaSchemaField.attributeTypeMap;
    }
}
exports.ItemApiPayloadMetaSchemaField = ItemApiPayloadMetaSchemaField;
/**
 * @ignore
 */
ItemApiPayloadMetaSchemaField.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadMetaSchemaField.js.map