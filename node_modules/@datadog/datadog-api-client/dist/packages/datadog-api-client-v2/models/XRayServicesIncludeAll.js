"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.XRayServicesIncludeAll = void 0;
/**
 * Include all services.
 */
class XRayServicesIncludeAll {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return XRayServicesIncludeAll.attributeTypeMap;
    }
}
exports.XRayServicesIncludeAll = XRayServicesIncludeAll;
/**
 * @ignore
 */
XRayServicesIncludeAll.attributeTypeMap = {
    includeAll: {
        baseName: "include_all",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=XRayServicesIncludeAll.js.map