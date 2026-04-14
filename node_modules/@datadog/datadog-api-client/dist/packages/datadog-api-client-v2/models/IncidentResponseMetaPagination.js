"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponseMetaPagination = void 0;
/**
 * Pagination properties.
 */
class IncidentResponseMetaPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponseMetaPagination.attributeTypeMap;
    }
}
exports.IncidentResponseMetaPagination = IncidentResponseMetaPagination;
/**
 * @ignore
 */
IncidentResponseMetaPagination.attributeTypeMap = {
    nextOffset: {
        baseName: "next_offset",
        type: "number",
        format: "int64",
    },
    offset: {
        baseName: "offset",
        type: "number",
        format: "int64",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentResponseMetaPagination.js.map