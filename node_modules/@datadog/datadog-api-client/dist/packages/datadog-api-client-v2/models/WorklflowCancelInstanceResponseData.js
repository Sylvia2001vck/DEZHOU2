"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorklflowCancelInstanceResponseData = void 0;
/**
 * Data about the canceled instance.
 */
class WorklflowCancelInstanceResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorklflowCancelInstanceResponseData.attributeTypeMap;
    }
}
exports.WorklflowCancelInstanceResponseData = WorklflowCancelInstanceResponseData;
/**
 * @ignore
 */
WorklflowCancelInstanceResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorklflowCancelInstanceResponseData.js.map