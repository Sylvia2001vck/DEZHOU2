"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseMeta = void 0;
/**
 * Entity metadata.
 */
class EntityResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseMeta.attributeTypeMap;
    }
}
exports.EntityResponseMeta = EntityResponseMeta;
/**
 * @ignore
 */
EntityResponseMeta.attributeTypeMap = {
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
//# sourceMappingURL=EntityResponseMeta.js.map