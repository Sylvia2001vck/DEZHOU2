"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppKeyRegistrationsResponseMeta = void 0;
/**
 * The definition of `ListAppKeyRegistrationsResponseMeta` object.
 */
class ListAppKeyRegistrationsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppKeyRegistrationsResponseMeta.attributeTypeMap;
    }
}
exports.ListAppKeyRegistrationsResponseMeta = ListAppKeyRegistrationsResponseMeta;
/**
 * @ignore
 */
ListAppKeyRegistrationsResponseMeta.attributeTypeMap = {
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    totalFiltered: {
        baseName: "total_filtered",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppKeyRegistrationsResponseMeta.js.map