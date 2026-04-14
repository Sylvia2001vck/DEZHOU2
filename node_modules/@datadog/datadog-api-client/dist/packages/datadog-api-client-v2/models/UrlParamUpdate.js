"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlParamUpdate = void 0;
/**
 * The definition of `UrlParamUpdate` object.
 */
class UrlParamUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UrlParamUpdate.attributeTypeMap;
    }
}
exports.UrlParamUpdate = UrlParamUpdate;
/**
 * @ignore
 */
UrlParamUpdate.attributeTypeMap = {
    deleted: {
        baseName: "deleted",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UrlParamUpdate.js.map