"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleAttributesFields = void 0;
/**
 * Dynamic fields associated with the handle
 */
class IncidentHandleAttributesFields {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleAttributesFields.attributeTypeMap;
    }
}
exports.IncidentHandleAttributesFields = IncidentHandleAttributesFields;
/**
 * @ignore
 */
IncidentHandleAttributesFields.attributeTypeMap = {
    severity: {
        baseName: "severity",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleAttributesFields.js.map