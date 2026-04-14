"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationResponseMeta = void 0;
/**
 * Relation response metadata.
 */
class RelationResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationResponseMeta.attributeTypeMap;
    }
}
exports.RelationResponseMeta = RelationResponseMeta;
/**
 * @ignore
 */
RelationResponseMeta.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    includeCount: {
        baseName: "includeCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationResponseMeta.js.map