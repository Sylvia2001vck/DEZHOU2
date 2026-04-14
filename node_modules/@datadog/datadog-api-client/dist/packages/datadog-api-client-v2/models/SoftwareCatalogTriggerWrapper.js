"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareCatalogTriggerWrapper = void 0;
/**
 * Schema for a Software Catalog-based trigger.
 */
class SoftwareCatalogTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SoftwareCatalogTriggerWrapper.attributeTypeMap;
    }
}
exports.SoftwareCatalogTriggerWrapper = SoftwareCatalogTriggerWrapper;
/**
 * @ignore
 */
SoftwareCatalogTriggerWrapper.attributeTypeMap = {
    softwareCatalogTrigger: {
        baseName: "softwareCatalogTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SoftwareCatalogTriggerWrapper.js.map