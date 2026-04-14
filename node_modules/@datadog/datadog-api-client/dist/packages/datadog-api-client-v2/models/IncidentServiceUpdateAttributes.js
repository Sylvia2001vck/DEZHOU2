"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceUpdateAttributes = void 0;
/**
 * The incident service's attributes for an update request.
 */
class IncidentServiceUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceUpdateAttributes.attributeTypeMap;
    }
}
exports.IncidentServiceUpdateAttributes = IncidentServiceUpdateAttributes;
/**
 * @ignore
 */
IncidentServiceUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=IncidentServiceUpdateAttributes.js.map