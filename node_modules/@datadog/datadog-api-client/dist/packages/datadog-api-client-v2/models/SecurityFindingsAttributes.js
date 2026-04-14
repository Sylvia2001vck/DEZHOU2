"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsAttributes = void 0;
/**
 * The JSON object containing all attributes of the security finding.
 */
class SecurityFindingsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsAttributes.attributeTypeMap;
    }
}
exports.SecurityFindingsAttributes = SecurityFindingsAttributes;
/**
 * @ignore
 */
SecurityFindingsAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsAttributes.js.map