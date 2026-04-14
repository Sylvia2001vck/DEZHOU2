"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorklflowGetInstanceResponseDataAttributes = void 0;
/**
 * The attributes of the instance response data.
 */
class WorklflowGetInstanceResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorklflowGetInstanceResponseDataAttributes.attributeTypeMap;
    }
}
exports.WorklflowGetInstanceResponseDataAttributes = WorklflowGetInstanceResponseDataAttributes;
/**
 * @ignore
 */
WorklflowGetInstanceResponseDataAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorklflowGetInstanceResponseDataAttributes.js.map