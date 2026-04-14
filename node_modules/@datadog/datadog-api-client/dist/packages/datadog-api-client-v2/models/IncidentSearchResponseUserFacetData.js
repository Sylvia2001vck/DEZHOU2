"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseUserFacetData = void 0;
/**
 * Facet data for user attributes of an incident.
 */
class IncidentSearchResponseUserFacetData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseUserFacetData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseUserFacetData = IncidentSearchResponseUserFacetData;
/**
 * @ignore
 */
IncidentSearchResponseUserFacetData.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
    },
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseUserFacetData.js.map