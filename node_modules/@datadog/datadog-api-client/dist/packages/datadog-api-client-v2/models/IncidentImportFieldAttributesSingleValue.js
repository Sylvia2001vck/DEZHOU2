"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportFieldAttributesSingleValue = void 0;
/**
 * A field with a single value selected.
 */
class IncidentImportFieldAttributesSingleValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportFieldAttributesSingleValue.attributeTypeMap;
    }
}
exports.IncidentImportFieldAttributesSingleValue = IncidentImportFieldAttributesSingleValue;
/**
 * @ignore
 */
IncidentImportFieldAttributesSingleValue.attributeTypeMap = {
    value: {
        baseName: "value",
        type: "string",
    },
};
//# sourceMappingURL=IncidentImportFieldAttributesSingleValue.js.map