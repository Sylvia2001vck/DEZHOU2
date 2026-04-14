"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedEntityMeta = void 0;
/**
 * Included related entity meta.
 */
class EntityResponseIncludedRelatedEntityMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedEntityMeta.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedEntityMeta = EntityResponseIncludedRelatedEntityMeta;
/**
 * @ignore
 */
EntityResponseIncludedRelatedEntityMeta.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "Date",
        format: "date-time",
    },
    definedBy: {
        baseName: "defined_by",
        type: "string",
    },
    modifiedAt: {
        baseName: "modifiedAt",
        type: "Date",
        format: "date-time",
    },
    source: {
        baseName: "source",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRelatedEntityMeta.js.map