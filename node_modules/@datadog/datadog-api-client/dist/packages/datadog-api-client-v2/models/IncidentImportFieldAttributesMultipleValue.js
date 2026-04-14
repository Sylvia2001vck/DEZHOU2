"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportFieldAttributesMultipleValue = void 0;
/**
 * A field with potentially multiple values selected.
 */
class IncidentImportFieldAttributesMultipleValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportFieldAttributesMultipleValue.attributeTypeMap;
    }
}
exports.IncidentImportFieldAttributesMultipleValue = IncidentImportFieldAttributesMultipleValue;
/**
 * @ignore
 */
IncidentImportFieldAttributesMultipleValue.attributeTypeMap = {
    value: {
        baseName: "value",
        type: "Array<string>",
    },
};
//# sourceMappingURL=IncidentImportFieldAttributesMultipleValue.js.map