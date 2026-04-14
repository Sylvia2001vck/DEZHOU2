"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceCreateAttributes = void 0;
/**
 * The incident service's attributes for a create request.
 */
class IncidentServiceCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentServiceCreateAttributes = IncidentServiceCreateAttributes;
/**
 * @ignore
 */
IncidentServiceCreateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentServiceCreateAttributes.js.map