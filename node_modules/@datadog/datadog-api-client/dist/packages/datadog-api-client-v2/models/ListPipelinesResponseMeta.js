"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPipelinesResponseMeta = void 0;
/**
 * Metadata about the response.
 */
class ListPipelinesResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListPipelinesResponseMeta.attributeTypeMap;
    }
}
exports.ListPipelinesResponseMeta = ListPipelinesResponseMeta;
/**
 * @ignore
 */
ListPipelinesResponseMeta.attributeTypeMap = {
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListPipelinesResponseMeta.js.map