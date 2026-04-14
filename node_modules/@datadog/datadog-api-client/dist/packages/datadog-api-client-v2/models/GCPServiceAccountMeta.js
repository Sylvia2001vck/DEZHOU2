"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPServiceAccountMeta = void 0;
/**
 * Additional information related to your service account.
 */
class GCPServiceAccountMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPServiceAccountMeta.attributeTypeMap;
    }
}
exports.GCPServiceAccountMeta = GCPServiceAccountMeta;
/**
 * @ignore
 */
GCPServiceAccountMeta.attributeTypeMap = {
    accessibleProjects: {
        baseName: "accessible_projects",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPServiceAccountMeta.js.map