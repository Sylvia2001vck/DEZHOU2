"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadMetaPage = void 0;
/**
 * Pagination information for a collection of datastore items.
 */
class ItemApiPayloadMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadMetaPage.attributeTypeMap;
    }
}
exports.ItemApiPayloadMetaPage = ItemApiPayloadMetaPage;
/**
 * @ignore
 */
ItemApiPayloadMetaPage.attributeTypeMap = {
    hasMore: {
        baseName: "hasMore",
        type: "boolean",
    },
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int64",
    },
    totalFilteredCount: {
        baseName: "totalFilteredCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadMetaPage.js.map