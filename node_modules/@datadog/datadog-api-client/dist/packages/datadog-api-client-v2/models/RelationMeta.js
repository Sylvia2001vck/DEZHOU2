"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationMeta = void 0;
/**
 * Relation metadata.
 */
class RelationMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationMeta.attributeTypeMap;
    }
}
exports.RelationMeta = RelationMeta;
/**
 * @ignore
 */
RelationMeta.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "Date",
        format: "date-time",
    },
    definedBy: {
        baseName: "definedBy",
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
//# sourceMappingURL=RelationMeta.js.map