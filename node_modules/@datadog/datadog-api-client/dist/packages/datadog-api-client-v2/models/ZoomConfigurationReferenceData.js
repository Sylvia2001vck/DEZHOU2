"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomConfigurationReferenceData = void 0;
/**
 * The Zoom configuration relationship data object.
 */
class ZoomConfigurationReferenceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ZoomConfigurationReferenceData.attributeTypeMap;
    }
}
exports.ZoomConfigurationReferenceData = ZoomConfigurationReferenceData;
/**
 * @ignore
 */
ZoomConfigurationReferenceData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ZoomConfigurationReferenceData.js.map