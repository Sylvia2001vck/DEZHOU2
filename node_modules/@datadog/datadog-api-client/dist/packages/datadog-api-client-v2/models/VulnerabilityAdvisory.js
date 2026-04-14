"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityAdvisory = void 0;
/**
 * Advisory associated with the vulnerability.
 */
class VulnerabilityAdvisory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityAdvisory.attributeTypeMap;
    }
}
exports.VulnerabilityAdvisory = VulnerabilityAdvisory;
/**
 * @ignore
 */
VulnerabilityAdvisory.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    lastModificationDate: {
        baseName: "last_modification_date",
        type: "string",
    },
    publishDate: {
        baseName: "publish_date",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityAdvisory.js.map